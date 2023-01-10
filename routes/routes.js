const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'Home.html'));
});

router.get('/create-user', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'CreateUser.html'));
});

router.post('/create-user', (req, res, next) => {
  console.log(req.body);
  res.redirect('/create-user');
});

router.get('/users-list', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'UsersList.html'));
});

router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', '404Error.html'));
});

module.exports = router;
