const Bill = require('../models/Bill.js');
const express = require('express');
const router = express.Router();

router.get('/all', async (req, res) => {
    try{
        const data = await Bill.find();
        res.json(data).status(200);
    }catch(error){
        res.json(error).status(400);
    }
});

router.post('/create', async (req, res) => {
    try{
        const data = new Bill(req.body);
        await data.save();
        res.json({message: "item added"}).status(200);
    }catch(error){
        res.json(error).status(400);
    }
});

router.put('/update', async (req, res) => {
    try{
        await Bill.findOneAndUpdate({_id: req.body.id}, req.body);
        res.json({message: "item updated"}).status(200);
    }catch(error){
        res.json(error).status(400);
    }
});

router.delete('/delete', async (req, res) => {
    try{
        await Bill.findByIdAndDelete({_id: req.body.id});
        res.json({message: "item deleted"}).status(200);
    }catch(error){
        res.json(error).status(400);
    }
});

module.exports = router;


/*
create
{
	"username": "user 01",
	"email": "user@gmail.com",
	"password": "d8w1342o812",
	"number": 1652342156,
}

update
{
    "id": "650077c500735b98cfe3982b",
    "username": "user 01",
	"email": "user@gmail.com",
	"password": "d8w1342o812",
	"number": 1652342156,
}

delete
{
    "id":"65006fdcec2e190fda654fcd",
}

*/