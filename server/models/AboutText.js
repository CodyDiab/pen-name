const mongoose = require('mongoose');

const {Schema} = mongoose;

const AboutText = new Schema(
    {
        aboutBody: {
            type: String,
           
        }
    }
);

module.exports = aboutSchema;