const express = require('express');
const { RatingProduct } = require('../db/models');

const router = express.Router();

router.post('/:id', async (req, res) => {
  try {
    const userLike = await RatingProduct.findOne({
      where: {
        user_buyer: req.session.userSession.id,
        product_id: req.body.id,
      },
    });
    if (userLike === null) {
      await RatingProduct.create(
        {
          user_buyer: req.session.userSession.id,
          product_id: req.body.id,
          grade: req.body.star,
        },
      );
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let counter = 0;
    const { id } = req.params;
    const arrLikesProd = await RatingProduct.findAll({ where: { product_id: id } });
    await Promise.all(
      arrLikesProd.map(async (el) => {
        counter += el.grade;
      }),
    );
    const average = counter / arrLikesProd.length;
    res.json({ state: Math.floor(average), countLikes: arrLikesProd.length });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
