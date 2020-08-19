const mongoose = require('mongoose');

//mongo "mongodb+srv://cluster0.z3tav.gcp.mongodb.net/<dbname>" --username Pen-Name-db
//need to set up credentials 
const connection = "mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    module.exports = mongoose.connection;