const express = require('express');
const { Product, RentProduct } = require('../db/models');

const router = express.Router();

router.get('/accept/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const thisProduct = await Product.findByPk(id);
    thisProduct.status = false;
    await thisProduct.save();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

router.post('/decline', async (req, res) => {
  try {
    console.log(req.body);
    const { user_renter, product_id } = req.body;
    const thisProduct = await Product.findByPk(product_id);
    if (thisProduct.status !== true) {
      thisProduct.status = !thisProduct.status;
      await thisProduct.save();
    }
    await RentProduct.destroy({ where: { product_id, user_renter } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
