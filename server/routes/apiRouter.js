const express = require('express');
const { Coment, User } = require('../db/models');

const router = express.Router();

router.post('/addcomment', async (req, res) => {
  const { input } = req.body;
  const { pid } = req.body;
  const { uid } = req.body;
  const newComment = await Coment.create({ text: input, user_id: uid, product_id: pid });
  res.json(newComment);
});

router.get('/comment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allComment = await Coment.findAll({
      where: { product_id: id },
      include: [
        { model: User },
      ],
    });
    console.log(allComment);
    res.json(allComment);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
