const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 3500);
app.set('json spaces', 4);

// Middlewares
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use(require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});