require('dotenv').config();
const User = require('../models/user');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const passport = require('passport');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://api.petfinder.com/v2/oauth2/authorization',
    tokenURL: 'https://api.petfinder.com/v2/oauth2/token',
    clientID: process.env.PETFINDER_API_KEY,
    clientSecret: process.env.PETFINDER_SECRET,
    callbackURL: "http://localhost/auth"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOne(profile.id, (err, user) => {
        if (user) {
            return cb(err, user)
        } else {
            User.create({ _id: profile.id }, (err, user) => {
                return cb(err, user)
            })
        }
    })
}
));

module.exports = passport;