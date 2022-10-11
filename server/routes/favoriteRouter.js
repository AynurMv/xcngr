const express = require('express');
const {
  Favorit, Product, User, Category, View, ProductPhoto,
} = require('../db/models');

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Favorit.create({
      user_id: req.session.userSession.id,
      product_id: id,
    });
    const createdFavorite = await Favorit.findOne({
      where: {
        user_id: req.session?.userSession.id,
        product_id: id,
      },
      include: {
        model: Product,
        include: [
          { model: User },
          { model: Category },
          { model: View },
          { model: ProductPhoto }],
      },
    });
    res.json(createdFavorite);
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Favorit.destroy({
      where: {
        user_id: req.session.userSession.id,
        product_id: id,
      },
    });
    res.json(false);
  } catch (e) {
    console.log(e);
  }
});

router.get('/isfavorite/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const Favorite = await Favorit.findOne({
      where: {
        user_id: req.session.userSession.id,
        product_id: id,
      },
    });
    Favorite ? res.json(true) : res.json(false);
  } catch (e) {
    console.log(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorit.findAll({
      where: {
        user_id:
    req.session?.userSession.id,
      },
      include: {
        model: Product,
        include: [
          { model: User },
          { model: Category },
          { model: View },
          { model: ProductPhoto }],
      },
    });
    res.json(favorites);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
