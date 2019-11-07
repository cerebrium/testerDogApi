require('dotenv').config();
const User = require('../models/user');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://api.petfinder.com/v2/oauth2/token',
    tokenURL: 'https://api.petfinder.com/v2/oauth2/token',
    clientID: process.env.PETFINDER_API_KEY,
    clientSecret: process.env.PETFINDER_SECRET,
    callbackURL: "http://localhost/auth"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOne(profile.id, (err, user) => {
        if (!user) {
            User.create({ _id: profile.id }, (err, user) => {
            }, (err, user) => {
                return cb(null, {...user.toObject(), accessToken});
            })
        } else {
            return cb(null, {...user.toObject(), accessToken});
        }
    })
}));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;