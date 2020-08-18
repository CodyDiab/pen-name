
const mongoose = require('mongoose');

const {Schema} = mongoose;

const followingSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        }
    }
);

module.exports = followingSchema;



