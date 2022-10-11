import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../UI/Card';

export default function AllFavoriteProducts() {
  const favorites = useSelector((state) => state.favorite);
  const [products, setProducts] = useState([]);
  const [categoryInput, setCategoryInput] = useState({});
  const [findInput, setFindInput] = useState({ minRange: 0, maxRange: 5000 });
  useEffect(() => {
    setProducts(
      favorites
        .map((prod) => {
          const images = prod?.Product?.ProductPhotos?.map((el) => el.photo);
          return {
            id: prod.Product.id,
            categoryId: prod.Product.Category.id,
            photos: images,
            userName: prod.Product.User.f_name,
            price: prod.Product.price,
            userPhoto: prod.Product.User.photo,
            description: prod.Product.description,
            productName: prod.Product.name,
            date: (new Date(prod.Product.createdAt)).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
            userId: prod.Product.user_id,
          };
        })
        .filter((el) => Number(el.price) <= findInput.maxRange && Number(el.price) >= findInput.minRange)
        .filter(
          (el) => {
            const categoryKeys = Object.keys(categoryInput)?.map((elem) => Number(elem));
            return Object.values(categoryInput).includes(true) ? (categoryKeys.includes(el.categoryId) && categoryInput[el.categoryId] === true) : true;
          },
        ),
    );
  }, [categoryInput, findInput, favorites]);

  const categories = useSelector((state) => state.categories);
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
        {categories?.map((el) => (
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
          <div style={{ width: '4rem' }}>руб/сут</div>
        </div>
        <div className="range-slider">
          <input className="range-slider__range" type="range" name="minRange" value={findInput.minRange} onChange={changeHandler} min="0" max="5000" step="50" style={{ width: '80%' }} />
        </div>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <div style={{ width: '1.2rem' }}>До</div>
          <div style={{ width: '4rem', display: 'flex', justifyContent: 'center' }}>{findInput.maxRange}</div>
          <div style={{ width: '4rem' }}>руб/сут</div>
        </div>
        <div className="range-slider">
          <input className="range-slider__range" type="range" name="maxRange" value={findInput.maxRange} onChange={changeHandler} min="0" max="5000" step="50" style={{ width: '80%' }} />
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}
        >
          { products?.map((el) => <Card product={el} key={el.id} />)}
        </div>
      </div>
    </div>
  );
}
