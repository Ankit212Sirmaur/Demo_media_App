const express = require('express');
const {Port} = require('./config/serverConfig');
const connect = require('./config/databaseConfig')
const authRouter = require('./routes/authRouter')
const postRoutes = require('./routes/postRoutes');
const middleware = require('./middlewares/requireLogin')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/auth',authRouter);
app.use('/getAll',middleware, postRoutes);

app.listen(Port, async() =>{
    console.log(`Server started at ${Port}`);
    connect();
})
