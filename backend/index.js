const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});