/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Map from '../Map/Map';
import StarUserRating from '../../UI/StarUserRating';
import Days from '../../UI/Days';
import BreadCrumps from '../../UI/BreadCrumps';
import { productArg } from '../../redux/actions/prodItemPageAction';
import Loading from '../../UI/Loading';
import ModalRegistration from '../../UI/ModalRegistration';
import ModalLog from '../../UI/ModalLog';
import { countGradeProd } from '../../redux/actions/gradeProductAction';
import Ucant from '../../UI/Ucant';
import ItemModalRegistration from '../../UI/ItemModalRegistration';
import ItemModalLog from '../../UI/ItemModalLog';
import ModalItemRent from '../../UI/ModalItemRent';
import CommentsModalka from '../../UI/CommentsModalka';
import './index.css';
import CommentList from '../../UI/CommentList';
import DeleteModal from '../../UI/DeleteModal';
import UpdateModal from '../../UI/UpdateModal';

export default function ItemPage({
  modal, setModal,
  night, regActive, setRegActive, logActive, setLogActive,

}) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const argProduct = useSelector((state) => state.prodItemPage);
  const { id } = useParams();
  const num = id;
  const [cheker, setChecker] = useState(false);
  const [itemreg, setItemreg] = useState(false);
  const [itemlog, setItemlog] = useState(false);
  const [rent, setRent] = useState(false);
  const [send, setSend] = useState(false);
  const [coment, setComent] = useState(false);
  const [deleter, setDeleter] = useState(false);
  const [update, setUpdate] = useState(false);
  const [inputs, setInputs] = useState({ timing: 1 });
  const starRating = useSelector((state) => state.gradeProduct);
  useEffect(() => {
    dispatch(countGradeProd(id));
  }, [starRating.state]);

  useEffect(() => {
    dispatch(productArg(argProduct.id));
  }, [update]);

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const priceCalculate = argProduct.price * inputs.timing;
  useEffect(() => {
    dispatch(productArg(id));
  }, []);

  const modalopen = () => {
    setRent(true);
    setChecker(true);
  };
  return (
    <>
      <div style={{ marginTop: '2%', marginLeft: '2%' }}>
        <BreadCrumps night={night} itemName={argProduct?.name} category={argProduct?.Category?.name} />
      </div>
      <div className="first-screen">
        <div className="first-screen__content">
          <div className="first-screen__left">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              loop
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{
                height: '600px',
                width: '600px',
              }}
            >
              {argProduct?.category_id ? (
                argProduct?.ProductPhotos?.map((el) => (
                  <SwiperSlide>
                    <img
                      style={{
                        height: '700px',
                        width: '400px',
                      }}
                      src={`http://localhost:3001/images/${Object.values(el)[0]}`}
                      alt={`${el[0]}`}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <Loading />
              )}

            </Swiper>
          </div>
          <div className="first-screen__right">
            <div className="first-screen__right-top">
              <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{argProduct?.name}</p>
              <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{argProduct?.Category?.name}</p>
              <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>
                <VisibilityIcon />
                {' '}
                { argProduct.id && argProduct?.Views[0].counter}
              </p>
              <StarUserRating star={starRating} />
              <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>
                {priceCalculate.toFixed(2)}
                {' '}
                ₽
              </p>
            </div>
            <div className="first-screen__right-mid">
              <p style={!night === true ? ({ color: '#626262' }) : ({ color: 'white' })}>
                Максимальный срок аренды:
                {' '}
                {argProduct?.timing}
                {argProduct?.timing?.toString().slice(-1).includes('1') && argProduct?.timing.toString() !== '11' ? (
                  <>
                    {' '}
                    день
                  </>
                ) : (
                  <>
                    {' '}
                    дней
                  </>
                )}
              </p>
              <p>Двигайте ползунок вправо если вам нужно больше времени на аренду</p>
              {argProduct.timing
              && <Days changeHandler={changeHandler} inputs={inputs} max={argProduct.timing} />}
              {inputs.timing === 30 ? (
                <p>Слишком мало дней для аренды? Свяжитесь с владельцем</p>)
                : (
                  <></>
                )}
              <b style={{ marginBottom: '1px' }}>Описание:</b>
              <p style={{ marginTop: '1px' }}>{argProduct?.description}</p>

            </div>
            <div className="first-screen__right-comments">
              {coment == true ? (
                <CommentsModalka setComent={setComent} />
              ) : (
                <>
                </>
              )}
              {user.id && coment == false && user.id !== argProduct.user_id ? (
                <>
                  <Button onClick={() => setComent(true)} variant="contained" color="success" type="button">Оставить комментарий</Button>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="first-screen__right-bottom">
              {argProduct.user_id !== user.id ? (
                <>
                  {send === true ? (
                    <>
                      <Button onClick={modalopen} variant="outlined" type="button">Заявка отправлена</Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={modalopen} variant="outlined" type="button">Взять в аренду</Button>
                    </>
                  )}
                  <>
                  </>

                </>
              ) : (
                <>
                  <Button type="submit" variant="contained" onClick={() => setUpdate(true)}>Изменить данные о товаре</Button>
                  <Button type="submit" onClick={() => setDeleter(true)} variant="contained">Снять с доски</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <Map coordinates={argProduct.location} />
      </div>
      <div style={!night === true ? ({ backgroundColor: 'white', color: 'white' }) : ({ backgroundColor: '#202124', color: 'white' })} className="comments__block">
        <CommentList night={night} id={num} />
      </div>
      {regActive === true ? (
        <ModalRegistration setRegActive={setRegActive} />
      ) : (
        <></>
      )}
      {logActive === true ? (
        <ModalLog setLogActive={setLogActive} />
      ) : (
        <></>
      )}
      {!user.id && cheker == true ? (
        <Ucant modal={modal} setModal={setModal} cheker={cheker} setChecker={setChecker} argProduct={argProduct} setItemreg={setItemreg} setItemlog={setItemlog} />
      ) : (
        <></>
      )}
      {itemreg === true ? (
        <ItemModalRegistration setItemreg={setItemreg} setRent={setRent} />
      ) : (
        <></>
      )}
      {itemlog === true ? (
        <ItemModalLog setItemlog={setItemlog} setRent={setRent} />
      ) : (
        <></>
      )}
      {user.id && rent == true ? (
        <ModalItemRent input={inputs} id={num} setRent={setRent} setSend={setSend} />
      ) : (
        <></>
      )}
      {user.id == argProduct.user_id && deleter == true ? (
        <DeleteModal deleter={deleter} setDeleter={setDeleter} argProduct={argProduct} />
      ) : (
        <></>
      )}
      {update == true ? (
        <UpdateModal setUpdate={setUpdate} argProduct={argProduct} />
      ) : (
        <></>
      )}
    </>
  );
}
