const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    title: String,
    content: String,
    urlToImage: String,
});

module.exports = mongoose.model('News', NewsSchema);