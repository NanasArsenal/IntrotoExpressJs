require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const path = require('path');
const connDb =  require('./src/config/dbConnection')

connDb(); 


app.get('/', require('./src/routes/index'))

app.listen(port , ()=>{
    console.log("Hello World from port", port)
})
