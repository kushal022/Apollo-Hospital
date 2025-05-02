const express = require('express');
const { docAddCtrl, getAllDocCtrl, getAllFilterDocCtrl } = require('../controller/docCtrl');
const router = express.Router();



router.post('/createDoctor',docAddCtrl)
router.post('/getAllFilterDoctor',getAllFilterDocCtrl)
router.get('/getAllDoctor',getAllDocCtrl)

module.exports = router;