const express = require('express');
const router = express.Router();

app.get('/',
passport.authenticate('oauth2'));

app.get('/callback',
passport.authenticate('oauth2', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
});