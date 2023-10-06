const Category = require('../models/Category.js');
const express = require('express');
const router = express.Router();

router.post('/create', async (req, res) => {
    try{
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.json({message: "item added"}).status(200);
    }catch(error){
        res.json(error).status(400);
    }
});

module.exports = router;