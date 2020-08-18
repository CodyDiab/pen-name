const mongoose = require('mongoose');

const {Schema} = mongoose;

const followersSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        }
    }
);

module.exports = followersSchema;