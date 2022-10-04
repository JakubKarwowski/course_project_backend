const express = require("express");
const router = express.Router();

const CollectionModel = require("../../Models/Collection");

//get all
router.get("/getcollections" , (req,res) => {
    CollectionModel.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json('no items found'))

});








//get one

//create

//delete

//edit

module.exports = router;