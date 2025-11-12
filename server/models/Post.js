const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    artistName: {
        type: String,
        required: true
    },

    albumName: {
        type: String,
        required: true
    },

    releaseDate: {
        type: Number,
        required: true
    },

    reviewScore: {
        type: Number,
        required: true
    },

     genre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);