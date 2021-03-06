require('dotenv').config();

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://api.petfinder.com/v2/oauth2/token',
    tokenURL: 'https://www.example.com/oauth2/token',
    clientID: Process.env.PETFINDER_API_KEY,
    clientSecret: EXAMPLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/example/callback"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
    return cb(err, user);
    });
}
));