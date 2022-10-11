import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/actions/userItemsAction';

export default function CardUser({ el }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: '2rem 2rem 0rem 2rem' }}>
      <main>
        <article className="card">
          <div className="item__img__container">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              loop
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {el.ProductPhotos?.map((photo) => (
                <SwiperSlide key={photo.id} style={{ borderRadius: '1rem' }}>
                  <img
                    className="item__img"
                    src={`http://localhost:3001/images/${photo.photo}`}
                    alt="..."
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="item__info">
            <Link to={`/item/${el.id}`} style={{ textDecoration: 'none' }}><h1 className="item__title" style={{ textDecoration: 'none' }}>{el?.name}</h1></Link>
            <p className="item__desc" style={{ color: 'white' }}>{el?.description}</p>
            <div className="item__price__time">
              <div className="item__price" style={{ alignItems: 'center', display: 'flex' }}>
                {/* <img className="item__icon" style={{ width: '1rem' }} src="https://st3.depositphotos.com/4326917/14193/v/600/depositphotos_141937226-stock-illustration-ruble-sign-dark-green-icon.jpg" alt="ethereum-icon" /> */}
                <span style={{ color: 'white' }} className="price-eth">{el.price}</span>
                <p style={{ color: 'white', margin: '0rem 0rem 0rem 0.5rem' }}>
                  руб/сут
                </p>
              </div>
              <div className="item__time">
                <img className="item__icon" src="https://kellychi22.github.io/frontend-mentor-solutions/04-nft-preview-card-component/images/icon-clock.svg" alt="clock-icon" />
                <span className="days-left" style={{ color: 'white' }}>{el?.date}</span>
              </div>
            </div>
            <div className="item__creator" style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <img className="creator__img" src={`http://localhost:3001/images/${userPhoto}`} alt="creator_avator" /> */}
              {user.id === el.user_id ? (
                <>
                  <IconButton style={{ color: 'white' }} aria-label="delete" onClick={() => dispatch(deleteItem(el.id))} size="large" color="primary" title="Удалить">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton style={{ color: 'white' }} aria-label="delete" onClick={() => dispatch(deleteItem(el.id))} size="large" color="primary" title="Изменить товар">
                    <BorderColorIcon fontSize="inherit" />
                  </IconButton>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
