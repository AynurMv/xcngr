const express = require('express');
const { Category } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    res.json(allCategories);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
