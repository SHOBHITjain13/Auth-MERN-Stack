const cors = require('cors');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
