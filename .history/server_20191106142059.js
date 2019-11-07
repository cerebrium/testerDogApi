require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let config = {
    client_id: process.env.PETFINDER_API_KEY,
    client_secret: process.env.PETFINDER_SECRET
}
let token = localStorage.getItem('apiToken')

app.get('/', (req, res) => {
    axios.get('https://api.petfinder.com/v2/oauth2/token', {config})
    .then(response)
})

app.listen(3000)