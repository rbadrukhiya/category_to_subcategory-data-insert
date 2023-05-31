var express = require('express');
var router = express.Router();

var subcategory = require('../models/subcategory')
var category = require('../models/category')




router.post('/add_sub_category', async function (req, res, next) {

    var category_data = req.body.sub_category_name

    // data = await subcategory.create(req.body)

    var data = await subcategory.find({ sub_category_name: category_data })
    var [data] = data
    console.log(data);

    if (data == undefined) {
        subdata = await subcategory.create(req.body)
        res.status(401).json({
            status:'success undefined',
            subdata
        })
    }
    else {
        if (data.sub_category_name == req.body.sub_category_name) {
            console.log('match name');
            if (req.body.category_id == data.category_id) {
                res.status(401).json({
                    ststus: 'that data is already taken!...'
                })
            }
            else {
                data = await subcategory.create(req.body)
                res.status(401).json({
                    ststus: 'success insert  data not match  id and name',
                    data
                })
            }
        }
        else {
            data = await subcategory.create(req.body)
            res.status(401).json({
                ststus: 'success name not match insert',
                data
            })
        }
    }






    // try {
    //     var data = await category.create(req.body)
    //     res.status(201).json({
    //         status: 'success',
    //         data
    //     })
    // }
    // catch (error) {
    //     console.log(error);
    // }

});



module.exports = router;
