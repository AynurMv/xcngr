const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { default: axios } = require('axios');
const authRouter = require('./routes/authRouter');
const apiRouter = require('./routes/apiRouter');
const favoriteRouter = require('./routes/favoriteRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const productRouter = require('./routes/productRouter');
const usersRouter = require('./routes/usersRouter');
const userItemsRouter = require('./routes/userItemsRouter');
const productPageRouter = require('./routes/productPageRouter');
const gradeProductRouter = require('./routes/gradeProductRouter');
const orderRouter = require('./routes/orderRouter');
const applicationRouter = require('./routes/applicationRouter');

const app = express();
const PORT = 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/photos-category', express.static(path.join(__dirname, 'photos-category')));

app.post('/coordinates', async (req, res) => {
  try {
    const { address } = req.body;
    const token = '8abf2516c963dfbfe7e8033ee347b1a9420b60e8';
    const secret = 'b54649db1261aab4bfc4c828656fa8670a524bac';
    const query = address;

    const options = {
      url: 'https://cleaner.dadata.ru/api/v1/clean/address',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
        'X-Secret': secret,
      },
      data: JSON.stringify([query]),
    };

    const response = await axios(options);
    res.json({
      lat: response.data[0].geo_lat,
      lon: response.data[0].geo_lon,
      metro: response.data[0].metro,
    });
  } catch (err) {
    console.log(err);
  }
});

app.use(session({
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/auth', authRouter);
app.use('/api/v1', apiRouter);
app.use('/favorite', favoriteRouter);
app.use('/categories', categoriesRouter);
app.use('/product', productRouter);
app.use('/user', usersRouter);
app.use('/item-product', productPageRouter);
app.use('/useritems', userItemsRouter);
app.use('/grade', gradeProductRouter);
app.use('/order', orderRouter);
app.use('/application', applicationRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
