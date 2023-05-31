const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const category = new Schema({
    product_name: ({
        type: String
    })
})

const MyModel = mongoose.model('category', category);
module.exports = MyModel