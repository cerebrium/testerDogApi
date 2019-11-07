require('dotenv').config();

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://api.petfinder.com/oauth2/authorize',
    tokenURL: 'https://api.petfinder.com/v2/oauth2/token',
    clientID: EXAMPLE_CLIENT_ID,
    clientSecret: EXAMPLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/example/callback"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
    return cb(err, user);
    });
}
));