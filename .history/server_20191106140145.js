const express = require('express');
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    
})

app.listen(3000)