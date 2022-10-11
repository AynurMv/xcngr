import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteFavoriteAsync, setFavorite } from '../redux/actions/favoritesAction';

export default function Card({ product }) {
  const {
    photos, userName, userPhoto, description, productName, price, date, userId, id,
  } = product;
  let smallDescr = '';
  if (description.length > 50) {
    smallDescr = `${description.substr(0, 47)}...`;
  } else {
    smallDescr = description;
  }
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios.get(`/product/isfavorite/${id}`).then((resp) => dispatch(setIsFavorite(resp.data)));
  }, [isFavorite]);
  const changeFavoriteHandler = () => {
    isFavorite
      ? dispatch(deleteFavoriteAsync(id, setIsFavorite)) : dispatch(setFavorite(id, setIsFavorite));
  };
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
              {photos.map((el) => (
                <SwiperSlide key={el} style={{ borderRadius: '1rem' }}>
                  <img
                    className="item__img"
                    src={`http://localhost:3001/images/${el}`}
                    alt="..."
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="item__info">
            <Link
              to={`/item/
          ${id}`}
              style={{ textDecoration: 'none' }}
            >
              <h1 className="item__title">
                {!product.status ? (
                  <svg height="55" width="35">
                    <circle cx="15" cy="25" r="5" fill="red" />
                  </svg>
                ) : (
                  <svg height="55" width="35">
                    <circle cx="15" cy="25" r="5" fill="#25FF1E" />
                  </svg>
                )}
                {productName}
              </h1>

            </Link>
            <p className="item__desc">{smallDescr}</p>
            <div className="item__price__time">
              <div className="item__price" style={{ alignItems: 'center', display: 'flex' }}>
                <span className="price-eth">{price}</span>
                <p className="item__rud" style={{ margin: '0rem 0rem 0rem 0.5rem' }}>
                  ₽/сут
                </p>
              </div>
              <div className="item__time">
                <img className="item__icon" src="https://kellychi22.github.io/frontend-mentor-solutions/04-nft-preview-card-component/images/icon-clock.svg" alt="clock-icon" />
                <span className="days-left" style={{ color: 'white' }}>{date}</span>
              </div>
            </div>
            <div className="item__creator">
              <img className="creator__img" src={`http://localhost:3001/images/${userPhoto}`} alt="creator_avator" />
              <p className="creator__info">
                <Link className="creator__name" to={`/user/${userId}`}>
                  {' '}
                  <span className="item__creator__span">пользователь</span>
                  {' '}
                  {userName}
                </Link>
              </p>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <input className="like" type="checkbox" id={`heart${product.id}`} onChange={changeFavoriteHandler} checked={isFavorite} />
                <label htmlFor={`heart${product.id}`} />
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
