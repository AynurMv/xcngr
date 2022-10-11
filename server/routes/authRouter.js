const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const fileMiddleware = require('../middlewares/file');

const router = express.Router();

router.post('/registration', fileMiddleware.single('photo'), async (req, res) => {
  try {
    const {
      f_name, l_name, password, email, photo, telegram, phone,
    } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      f_name, l_name, password: hashedPass, email, photo: req.file.originalname, telegram, phone,
    });
    req.session.userSession = {
      email: newUser.email,
      f_name: newUser.f_name,
      l_name: newUser.l_name,
      id: newUser.id,
      telegram: newUser.telegram,
      phone: newUser.phone,
      photo: newUser.photo,
    };
    res.json(req.session.userSession).status(200);
  } catch (e) {
    console.log(e);
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(password, newUser.password);
    if (compare) {
      req.session.userSession = {
        email: newUser.email,
        f_name: newUser.f_name,
        l_name: newUser.l_name,
        id: newUser.id,
        telegram: newUser.telegram,
        phone: newUser.phone,
        photo: newUser.photo,
      };
      res.json(req.session.userSession).status(200);
    } else {
      res.sendStatus(401);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

router.post('/check', async (req, res) => {
  try {
    if (req.session.userSession) {
      return res.json(req.session.userSession);
    }
    return res.sendStatus(401);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
