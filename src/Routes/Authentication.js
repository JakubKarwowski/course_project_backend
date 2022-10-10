const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verifyJWT = require("../Methods/verifyJWT")

const UserModel = require("../Models/User");

router.post("/register", async (req,res) => {
    const user = req.body;

    const takenUsername = await UserModel.findOne({username : user.username})
    const takenName = await UserModel.findOne({name : user.name})

    if(takenUsername || takenName) {
        res.json({message : "Username or email has already been registered"})
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new UserModel({
            username : user.username.toLowerCase(),
            name : user.name,
            password : user.password
        })

        dbUser.save()
        res.json({message: "Success"})
    }
   
});

router.post("/login", (req,res) => {
    const userLoggingIn = req.body;

    UserModel.findOne({username: userLoggingIn.username})
    .then(dbUser => {
        if(!dbUser) {
            return res.json({
                message: "Invalid Username or Password!"
            })
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect => {
            if (isCorrect){
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                }
                jwt.sign(
                    payload,
                    process.env.JVT_SECRET,
                    {expiresIn: 86400},
                    (err,token) => {
                        if(err) return res.json({message: err})
                        return res.json({
                            message: "Success",
                            token: "Bearer "+ token
                        })
                    }
                )
            } else{
                return res.json({
                    message: "Invalid Username or Password"
                })
            }
        })
    })
})

router.get("/getUsername", verifyJWT, (req,res) => {
    res.json({isLoggedIn: true, username: req.user.username})
})

module.exports = router;