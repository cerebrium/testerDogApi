require('dotenv').config();

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://api.petfinder.com/v2/oauth2/token',
    tokenURL: 'https://api.petfinder.com/v2/oauth2/token',
    clientID: process.env.PETFINDER_API_KEY,
    clientSecret: process.env.PETFINDER_SECRET,
    callbackURL: "http://localhost/auth"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
    return cb(err, user);
    });
}
));