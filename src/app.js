const express = require ('express');
const app = express();
const morgan = require('morgan');


//Settings:
app.set('port', process.env.PORT || 9000);


//Midlewares:
app.use(morgan('dev'));
app.use(express.json());


//route
app.use('/api/users', require('./routes/users.route'));


//exports:
module.exports = app;



