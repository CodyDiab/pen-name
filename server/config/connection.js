const mongoose = require('mongoose');

//mongo "mongodb+srv://cluster0.z3tav.gcp.mongodb.net/PEN_NAME_db" --username Pen-Name-db
//need to set up credentials 
const connection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z3tav.gcp.mongodb.net/PEN_NAME_db?retryWrites=true&w=majority`
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/Pen-Name',
//   {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

module.exports = mongoose.connection;
