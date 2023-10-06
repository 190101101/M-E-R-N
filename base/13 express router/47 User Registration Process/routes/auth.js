const User = require('../models/User.js');
const express = require('express');
const md5 = require('md5');
const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const {password} = req.body;
        req.body.password = md5(password);
        const data = new User(req.body);
        await data.save();
        res.json({message: "a new user created successfully"}).status(200);
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
	"number": 1652342156
}

login
{
	"email": "user@gmail.com",
	"password": "d8w1342o812"
}

*/