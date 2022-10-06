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
router.get("/getuser", (req,res) => {
    UserModel.findById(req.body.id, function(err, result){
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
});
//add new user
router.post("/createuser", (req,res) => {
    const newUser = new UserModel({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin,
        blocked: req.body.blocked
    })
    newUser.save()
    .then(res.json("new user was added"))
    .catch(err => res.json(err))
})
//block user
router.patch("/blockuser", (req,res) =>{
    UserModel.findOneAndUpdate({_id : req.body.id}, {blocked : "true"}, (err, result) =>{
        if (err){
            res.json(err)
        }
        else {
            res.json("user was succesfully blocked")
        }
    })
})
//unblock user
router.patch("/unblockuser", (req,res) => {
    UserModel.findOneAndUpdate({_id : req.body.id}, {blocked : "false"}, (err, result) =>{
        if (err){
            res.json(err)
        }
        else {
            res.json("user was succesfully unblocked")
        }
    })
})
//delete user
router.delete("/deleteuser", (req,res) => {
    UserModel.findByIdAndDelete(req.body.id, (err) => {
        if (err){
            res.json(err)
        }
        else {
            res.json("user was succesfully deleted")
        };
    });
});
//add to Admins 
router.patch("/addtoadmins", (req,res) =>{
    UserModel.findOneAndUpdate({_id : req.body.id}, {admin : "true"}, (err, result) =>{
        if (err){
            res.json(err)
        }
        else {
            res.json("user was succesfully added to admins")
        }
    })
})
//remove from admins
router.patch("/removefromadmins", (req,res) =>{
    UserModel.findOneAndUpdate({_id : req.body.id}, {admin : "false"}, (err, result) =>{
        if (err){
            res.json(err)
        }
        else {
            res.json("user was succesfully removed from admins")
        }
    })
})


module.exports = router;