const express = require('express');
const {
  Product, ProductPhoto, Category, View,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const inc = await View.increment('counter', { where: { product_id: id } });
    console.log(inc[0][0]);
    const prodArg = await Product.findByPk(
      id,
      {
        include: [
          { model: ProductPhoto, attributes: ['photo'] },
          { model: Category, attributes: ['name'] },
          { model: View, attributes: ['counter'] },

        ],
      },
    );
    res.json(prodArg);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
