const mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
    name: String,
    category: String,
    price: Number,
    image: String,
    description: String
});
