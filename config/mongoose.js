const mongoose = require('mongoose');

const DB = 'mongodb+srv://Pradeepkumar:Cg1xsTKWEme5a4su@cluster0.h6fbodk.mongodb.net/?retryWrites=true&w=majority';

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
