require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
var petfinder = require('pet-finder-api')('api_key','api_secret');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let config = {
    client_id: process.env.PETFINDER_API_KEY,
    client_secret: process.env.PETFINDER_SECRET
}
let token = {
    Authorization: ''
}

app.get('/', (req, res) => {
    axios.get('https://api.petfinder.com/v2/oauth2/token', {config})
    .then(response => {
        token.Authorization = response.data.access_token
        // console.log(response.data.access_token)
    }).then(
        axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {token})
    ).then(response => {
        res.send(response.data)
    })
})

app.listen(3000)