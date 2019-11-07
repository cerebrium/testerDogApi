require('dotenv').config();
const User = require('../models/user');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://api.petfinder.com/v2/oauth2/token',
    tokenURL: 'https://api.petfinder.com/v2/oauth2/token',
    clientID: process.env.PETFINDER_API_KEY,
    clientSecret: process.env.PETFINDER_SECRET,
    callbackURL: "http://localhost/auth"
},
function(accessToken, refreshToken, profile, cb) {
    User.findById(profile.id, (err, user) => {
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