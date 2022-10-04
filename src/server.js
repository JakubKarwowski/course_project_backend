const express = require('express');
require("dotenv").config();
const connectDB = require("./Config/db")


const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.get('/', (req,res) => {
    res.send('Hello world!')
})

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})