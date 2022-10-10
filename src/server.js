const express = require('express');
require("dotenv").config();
const connectDB = require("./Config/db");
var bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json())

app.get('/', (req,res) => res.send('Hello world!'));
app.use('/collections', require('./Routes/Api/Collections'));
app.use('/users', require('./Routes/Api/Users'));
app.use('/authentication', require('./Routes/Authentication'))

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})