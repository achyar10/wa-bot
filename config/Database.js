const mongoose = require('mongoose')
require('dotenv').config()

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pwd: process.env.DB_PWD,
    dbName: process.env.DB_NAME,
}

const NODE = process.env.NODE || 'DEVELOPMENT'
module.exports = () => {
    if (NODE === 'PRODUCTION') {
        mongoose.Promise = global.Promise
        mongoose.connect(`mongodb://${config.user}:${config.pwd}@${config.host}:${config.port}/${config.dbName}?authSource=admin&w=1`, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err) return console.log(err);
            console.log("database connected");
        })
    } else {
        mongoose.Promise = global.Promise
        mongoose.connect(`mongodb://${config.host}/${config.dbName}`, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err) return console.log(err);
            console.log("database connected");
        })
    }
}