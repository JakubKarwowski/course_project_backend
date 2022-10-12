const jwt = require("jsonwebtoken")

function verifyJWT(req,res,next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]
    if(token) {
        jwt.verify(token, process.env.PASSPORTSECRET, (err,decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            req.user = {};
            req.user.id = decoded.id;
            req.user.username = decoded.username;
            req.user.admin = decoded.admin;
            req.user.blocked = decoded.blocked;
            next()
        })   
    } else{
        res.json({message: "Incorrect Token Given", isLoggedIn: false},)
    }
}

module.exports = verifyJWT;