// const path = require('path');
const express = require('express');

const appController = require('../controllers/app');

const router = express.Router();

router.post('/expenses',appController.postExpense);

router.get('/expenses',appController.getExpense);

router.post('/deleteexpense/',appController.deleteExpense);

module.exports =router ;