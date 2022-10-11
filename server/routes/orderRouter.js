const express = require('express');
const { RentProduct, User, Product } = require('../db/models');

const router = express.Router();

router.post('/:id', async (req, res) => {
  try {
    const {
      user, product, message, timing,
    } = req.body;
    const userRenter = await User.findOne({ where: { id: user } });
    const newOrder = await RentProduct.create({
      user_renter: user,
      f_name: userRenter.dataValues.f_name,
      l_name: userRenter.dataValues.l_name,
      product_id: product,
      message,
      timing,
    });
    res.json(newOrder);
  } catch (err) {
    console.error(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const { id } = req.session.userSession;
    const allProducts = await Product.findAll({
      where: {
        user_id: id,
      },
      include: [
        { model: RentProduct },
      ],
    });
    const filterProd = allProducts.filter((el) => el.RentProducts.length > 0);
    console.log(allProducts);
    res.json(filterProd);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
