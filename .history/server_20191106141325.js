require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    axios.get()
})

app.listen(3000)