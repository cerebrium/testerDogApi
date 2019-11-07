require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('./config/ppConfig');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// mongoose stuff
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log(`connected to mongodb on ${db.host}:${db.port}... `)
});
db.on('error', (err) => {
    console.log(`Database Error: \n${err}`)
})

app.get('/', (req, res) => {
    res.send('Home')
})

// mounting
app.use('/auth', require('./routes/auth'));

app.listen(3000)