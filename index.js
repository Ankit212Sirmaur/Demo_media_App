const express = require('express');
const {Port} = require('./config/serverConfig');
const connect = require('./config/databaseConfig')

const app = express();

app.get('/' ,(req, res) =>{
    return res.status(201).json({
        message: 'api is working'
    })
})

app.listen(Port, async() =>{
    console.log(`Server started at ${Port}`);
    connect();

})
