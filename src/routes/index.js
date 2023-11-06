const express = require('express');
const app = express();
const Router = express.Router();
const path = require('path');
const { useLogEvents, LogEvent} = require('../middleware/requestlog')


Router.get('^/$|/index(.html)?', (req,res)=>{
    LogEvent(req,res)
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})

module.exports = Router;