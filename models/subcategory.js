const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sub_category = new Schema({
    category_id: ({
        type: String
    }),
    sub_category_name:({
        type:String
    })
})

const MyModel = mongoose.model('sub_category', sub_category);
module.exports = MyModel