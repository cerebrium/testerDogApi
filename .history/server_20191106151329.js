require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
// var petfinder = require('pet-finder-api')(process.env.PETFINDER_API_KEY, process.env.PETFINDER_SECRET);

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/auth/example',
  passport.authenticate('oauth2'));

app.get('/auth/example/callback',
  passport.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(3000)