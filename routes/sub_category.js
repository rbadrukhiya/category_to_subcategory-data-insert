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
            status: 'success undefined',
            subdata
        })
    }
    else {
        if (data.sub_category_name == req.body.sub_category_name) {
            console.log('match name');
            if (req.body.category_id == data.category_id) {
                res.status(401).json({
                    status: 'that data is already taken!...'
                })
            }
            else {
                data = await subcategory.create(req.body)
                res.status(401).json({
                    status: 'success insert  data not match  id and name',
                    data
                })
            }
        }
        else {
            data = await subcategory.create(req.body)
            res.status(401).json({
                status: 'success name not match insert',
                data
            })
        }
    }



    // lookup to get data 

    // router.get('/getdata/:id', async function (req, res, next) {
    //     try {
    //     //   var data = await subcategory.find()
    //         var data = await subcategory.aggregate([
    //             {
    //                 '$lookup': {
    //                     'from': 'sub_categories',
    //                     'localField': "category_id",
    //                     'foreignField': '_id',
    //                     'as': 'user'
    //                 }
    //             },{
    //                 '$match':{
    //                     "category_id": req.params.id
    //                 }
    //             }
    //         ])
    //         res.status(201).json({
    //             status:'success',
    //             data
    //         })
    //     }
    //     catch {
    //         res.status(401).json({
    //             status:'alert',
                
    //         })
    //     }
        
    // })
        
        // router.get('/getdata' , async function(req , res , next){
        //     data = await category.find()
        //     console.log(data);
        // }) 

       
});



module.exports = router;
