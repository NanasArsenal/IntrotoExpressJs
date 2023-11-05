const mongoose = require('mongoose');
require('dotenv').config()
const connDb = async () =>{
    try {
        mongoose.connect(process.env.DATABASE_URL,{
            useUnifiedTopology:true,
            useNewUrlParser: true
           
        })
        console.log('Connected Successfully')
    } catch (error) {
        console.log("Error connectiing to MongoDB")
        console.error(error.message)
    }
}


module.exports = connDb ;