var express = require('express');
var router = express.Router();
var cat = require('../models/category')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getdata',async function(req, res, next) {
  data = await cat.find()
  res.status(201).json({
    status:'success',
    data
  })
});

module.exports = router;
