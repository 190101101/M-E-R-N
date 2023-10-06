const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// routes
const bill = require('./routes/bill.js');
const category = require('./routes/category.js');
const product = require('./routes/product.js');
const user = require('./routes/user.js');

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

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('ok');
});

app.use('/server/bill', bill);
app.use('/server/category', category);
app.use('/server/product', product);
app.use('/server/user', user);

app.listen(5000, () => {
    connect();
    console.log('http://localhost:5000');
})