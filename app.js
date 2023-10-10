const path= require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const cors = require('cors');
const routes = require('./routes/approutes')

const app=express();


// const urlencodedParser = bodyParser.urlencoded({ extended: true })
// app.use(express.json())
app.use(cors());
app.use(express.json());


app.use(routes);


sequelize.sync().then(()=>{
    app.listen(3000);
}).catch(err=>console.log(err));


