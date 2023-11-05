require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const path = require('path');
const connDb =  require('./src/config/dbConnection');
const cors = require('cors');



connDb(); 

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.get('/', require('./src/routes/index'))

app.listen(port , ()=>{
    console.log("Hello World from port", port)
})
