const express = require('express');
const router = express.Router();

app.get('/example',
passport.authenticate('oauth2'));

app.get('/auth/example/callback',
passport.authenticate('oauth2', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
});