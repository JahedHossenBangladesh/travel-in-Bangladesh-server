const mongoose = require('mongoose');

const dbUri = process.env.MONGO_URI;


if (!dbUri){
    console.error('mongo url is not set');
    return new Error('Mongo uri not set in env file');
}

mongoose.connect(
    dbUri,{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    },
    (err) =>{
        if(err) {
            console.error(`failed to connect using mongoose ${err}`)
        } else{
            console.info(`connected to db server`)
        }
    }
)

module.exports = mongoose;