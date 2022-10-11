/* eslint-disable import/no-unresolved */
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import './OneCartForm.css';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function OneCartForm() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <div className="oneCatrBlock">

      <div className="one-Cart-Block">
        <div className="oneCart">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="../../img/image.png" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../img/image2.png" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../img/image3.png" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../img/image4.png" alt="..." />
            </SwiperSlide>
          </Swiper>

          <h5 className="one-cart-zagolovok">Сумка</h5>
          <span className="one-cart-span">Сдам в аредну сумку </span>
          <div>$ 39.90</div>
        </div>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </div>
    </div>

  );
}
