require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const path = require('path');
const connDb =  require('./src/config/dbConnection');
const mongoose = require('mongoose');
const cors = require('cors');



connDb(); 
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json())


app.get('/', require('./src/routes/index'))


mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
      })

})
