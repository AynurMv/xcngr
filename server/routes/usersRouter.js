const express = require('express');
const { User } = require('../db/models');
const fileMiddleware = require('../middlewares/file');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', fileMiddleware.single('photo'), async (req, res) => {
  try {
    const {
      f_name, l_name, email, photo, telegram, phone,
    } = req.body;
    const arg = {
      f_name, l_name, email, telegram, phone, photo: req.file?.originalname,
    };
    console.log(arg);
    const newUser = await User.update(arg, { where: { id: req.params.id } });
    const newSessUser = await User.findOne({ where: { id: req.params.id } });
    req.session.userSession = {
      email: newSessUser.email,
      f_name: newSessUser.f_name,
      l_name: newSessUser.l_name,
      id: newSessUser.id,
      telegram: newSessUser.telegram,
      phone: newSessUser.phone,
      photo: newSessUser.photo,
    };
    res.json(req.session.userSession).status(200);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
