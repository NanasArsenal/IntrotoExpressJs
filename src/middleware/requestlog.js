const path =  require('path');
const mongoose = require('mongoose')
const Applog = require('../models/authlogs/Applog')


const LogEvent = async (req,res) =>{
    const eventlog ={
        method: req.method,
        url: req.url,
        ip: req.socket.remoteAddress,
    };

   try {
     await Applog.create(eventlog);
     console.log(req.socket.remoteAddress)
   } catch (error) {
        console.log(error)
   }
}



module.exports = {LogEvent} ;