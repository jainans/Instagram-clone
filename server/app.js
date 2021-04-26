const express = require('express');

const app = express();

const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');


const PORT = 5000 || process.env.port;
const host = '127.0.0.1';


mongoose.connect(MONGOURI,
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    } 
    
    );
mongoose.connection.on('connected', () => {
    console.log('connected to atlas haan!');
});

mongoose.connection.on('error', (err) => {
    console.log('error connecting', err);
})

require('./models/users');
require('./models/post');
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, () => {
    console.log('server started listening on port 5000');
})