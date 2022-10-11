const express = require('express');
const {
  Product, ProductPhoto, Category,
} = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const userItems = await Product.findAll({ include: [{ model: ProductPhoto, attributes: ['photo'] }, { model: Category, attributes: ['name'] }] });
    res.json(userItems);
  } catch (e) {
    console.log.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteItem = await Product.destroy({ where: { id } });
    res.json(deleteItem);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
