const express = require('express');
const Router = express.Router();
const path = require('path');
const { useLogEvents, LogEvent} = require('../middleware/requestlog')


Router.get('^/$|/index(.html)?', (req,res)=>{
    LogEvent(req,res)
    res.status(200).sendFile(path.join(path.join(__dirname,'../','views','index.html')))
})

module.exports = Router;