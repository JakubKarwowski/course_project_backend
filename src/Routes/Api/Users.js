const express = require("express");
const router = express.Router();

const UserModel = require("../../Models/User");

//get All users
router.get("/getusers", (req,res) => {
    UserModel.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json('no items found'))
});
//get user
// router.get("/getuser", (req,res) => {
//     UserModel.find({_id:req.body.id})
//     .then(items => res.json(items))
//     .catch(err => res.status(404).json('no items found'))
// });
//add new user

//block user

//unblock user

//delete user

//add to Admins 

//remove from admins

module.exports = router;