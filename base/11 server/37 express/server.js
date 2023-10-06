const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('server work');
});

app.use(router);

app.listen(5000, () => {
    console.log('http://localhost:5000');
})