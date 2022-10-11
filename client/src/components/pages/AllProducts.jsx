import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from '../../UI/Card';
import ModalRegistration from '../../UI/ModalRegistration';
import ModalLog from '../../UI/ModalLog';
import ModalAddProd from '../../UI/ModalAddProd';

export default function AllProducts({
  regActive, setRegActive, setLogActive, logActive, setAddProdActive, addProdActive,
}) {
  const [products, setProducts] = useState([]);
  const categories = useSelector((state) => state.categories);
  const [findInput, setFindInput] = useState({ minRange: 0, maxRange: 10000 });
  const [categoryInput, setCategoryInput] = useState({});
  useEffect(() => {
    axios.get('/product').then((response) => {
      setProducts(response.data.map((prod) => {
        const images = prod.ProductPhotos.map((el) => el.photo);
        return ({
          id: prod.id,
          categoryId: prod.Category.id,
          photos: images,
          userName: prod.User.f_name,
          price: prod.price,
          userPhoto: prod.User.photo,
          description: prod.description,
          productName: prod.name,
          date: (new Date(prod.createdAt)).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
          userId: prod.User.id,
          status: prod.status,
        });
      })
        .filter((el) => Number(el.price) <= findInput.maxRange && Number(el.price) >= findInput.minRange)
        .filter(
          (el) => {
            const keys = Object.keys(categoryInput)?.map((elem) => Number(elem));
            return Object.values(categoryInput).includes(true) ? keys.includes(el.categoryId) && categoryInput[el.categoryId] === true : true;
          },
        ));
    });
  }, [categoryInput, findInput]);

  const changeHandler = (e) => {
    setFindInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeCategoryHandler = (e) => {
    setCategoryInput((prev) => ({ ...prev, [e.target.name]: e.target.value !== 'true' }));
  };

  return (
    <div style={{ display: 'flex', marginLeft: '7rem' }}>
      <div style={{ marginRight: '3rem', marginTop: '1rem' }}>
        <p style={{ marginTop: '1rem', fontWeight: '500' }}>Категория</p>
        {categories.map((el) => (
          <div key={el.id} className="form-check">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={changeCategoryHandler} checked={categoryInput[el.id]} value={categoryInput[el.id]} name={el.id} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {el.name}
            </label>
          </div>
        ))}
        <p style={{ marginTop: '2rem', marginBottom: '0.5rem', fontWeight: '500' }}>Цена аренды</p>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '1.2rem' }}>От</div>
          <div style={{ width: '4rem', display: 'flex', justifyContent: 'center' }}>{findInput.minRange}</div>
          <div style={{ width: '4rem' }}>₽/сут</div>
        </div>
        <div className="range-slider">
          <input className="range-slider__range" type="range" name="minRange" value={findInput.minRange} onChange={changeHandler} min="0" max="10000" step="50" style={{ width: '80%' }} />
        </div>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <div style={{ width: '1.2rem' }}>До</div>
          <div style={{ width: '4rem', display: 'flex', justifyContent: 'center' }}>{findInput.maxRange}</div>
          <div style={{ width: '4rem' }}>₽/сут</div>
        </div>
        <div className="range-slider">
          <input className="range-slider__range" type="range" name="maxRange" value={findInput.maxRange} onChange={changeHandler} min="0" max="10000" step="50" style={{ width: '80%' }} />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}
        >
          {products?.map((el) => <Card product={el} key={el.id} />)}
        </div>
        <div style={{ height: '3rem' }} />
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
      {addProdActive === true ? (
        <ModalAddProd setAddProdActive={setAddProdActive} />
      ) : (
        <></>
      )}
    </div>
  );
}
