
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//requires are always at the top
require('dotenv').config();

//connect to db
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


//verify tokens and asign user objects to req.user propert
app.use(require('./config/checkToken'))


//put API routes here
app.use('/api/users', require('./routes/api/users'));

//catch all route
app.get('.*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//change port to 3001
const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});