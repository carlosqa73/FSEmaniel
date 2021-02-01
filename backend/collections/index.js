const nodbConfig = require("../config/nodb.config.js");
const mongoose = require('mongoose');

//const db_path = nodbConfig.dialect + '://' + nodbConfig.HOST + '/' + nodbConfig.noDB;

const MONGODB_URI = 'mongodb+srv://fizenetdawm:FiZeNet@cluster0.zntuk.mongodb.net/emaniel?retryWrites=true&w=majority'

const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    poolSize: 4
}


mongoose.connect(MONGODB_URI, config)
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });