const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

const app = express();
const router = express.Router();

dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected');
    }catch(error){
        throw error;
    }
}

router.get('/', (req, res) => {
    res.send('server work');
});

app.use(router);

app.listen(5000, () => {
    connect();
    console.log('http://localhost:5000');
})