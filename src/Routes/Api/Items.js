const express = require("express");
const router = express.Router();

const ItemsModel = require("../../Models/Item")

router.get("/getitems" , (req,res) => {
    ItemsModel.find()
    .then(items => res.json(items))
    .catch(err => res.status(404).json('no items found'))

});

router.get("/getitems/:id", (req,res) =>{
    ItemsModel.findById(req.params.id)
    .then((result)=> res.json(result))
    .catch((err)=> res.json(err))
})

router.post("/createitem", (req,res) => {
    const newItem = new ItemsModel({
        name : req.body.name,
        tags : req.body.tags,
        customFields : req.body.customFields,
        collectionId : req.body.collectionId,
        collectionName: req.body.collectionName,
    })
    newItem.save()
    .then(res.json("new item was added"))
    .catch(err => res.json(err))
})

router.delete('/deleteitem', (req,res) => {
    ItemsModel.findByIdAndDelete(req.body.id, (err) => {
        if (err){
            res.json(err)
        }
        else{
            res.json("item was succesfully deleted")
        };
    });
});

router.patch("/edititem", (req,res) => {
    ItemsModel.findByIdAndUpdate(req.body.id, req.body)
    .then(res.json("Item was succesfully edited"))
    .catch(err => res.json(err))
})


module.exports = router;