//So i am definning the schema of my app logs of my inventory mangement application.
const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;


const applogSchema = new Schema({
    method: {
        type: String,
        required: true,
    },
    url:{
        type: String,
        required:true
    },
    ip: {
        type: String,
    }
})


module.exports = mongoose.model('Applog', applogSchema);