const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/modulo-actividad-BD')
    .then (db => console.log('base conectada'))
    .catch(err => console.error(err));
    
//configuracion
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//static files
app.use(express.static(__dirname + '/public'));

//rutas
app.use('/api/tareas', require('./routes/tareas'));

//servidor escuchando
app.listen (3000, () => {
    console.log ('server esta en el puerto 3000');
});