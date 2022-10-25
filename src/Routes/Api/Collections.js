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
router.get("/getcollections/:id", (req,res) => {
    CollectionModel.findById(req.params.id)
    .then((result)=> res.json(result))
    .catch((err)=> res.json(err))
});
//create
router.post("/createcollection", (req,res) => {
    const newCollection = new CollectionModel({
        name : req.body.name,
        description : req.body.description,
        topic : req.body.topic,
        owner : req.body.owner,
        items : req.body.items,
    })
    newCollection.save()
    .then(res.json("new collection was added"))
    .catch(err => res.json(err))
})
//delete
router.delete('/deletecollection', (req,res) => {
    CollectionModel.findByIdAndDelete(req.body.id, (err) => {
        if (err){
            res.json(err)
        }
        else{
            res.json("collection was succesfully deleted")
        };
    });
});
//edit
router.patch("/editcollection", (req,res) => {
    CollectionModel.findByIdAndUpdate(req.body._id, req.body)
    .then(res.json("collection was succesfully edited"))
    .catch(err => res.json(err))
})

module.exports = router;