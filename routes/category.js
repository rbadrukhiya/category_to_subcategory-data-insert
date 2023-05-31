var express = require('express');
var router = express.Router();

var category = require('../models/category')



router.post('/addcategory', async function (req, res, next) {

    console.log(req.body);

    try {
        var data = await category.create(req.body)
        res.status(201).json({
            status: 'success',
            data
        })
    }
    catch (error) {
        console.log(error);
    }

});



module.exports = router;
