const mongoose = require('mongoose');
const config = require("config");

// DB Config
const db = config.get("DB");

// Connection to MongoDB
mongoConnection = () => {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => {
            console.log(`Mongo DB Connected : ${db}`);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = { mongoConnection }