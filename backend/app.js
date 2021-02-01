var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");
const cors = require("cors");

var usuariosRouter = require('./routes/usuarios.routes');
var productosRouter = require('./routes/productos.routes');
var noticiasRouter = require('./routes/noticias.routes');
var correosRouter = require('./routes/correos.routes');
var telefonosRouter = require('./routes/telefonos.routes');
var comprasRouter = require('./routes/compras.routes');

var app = express();

const nodb = require("./collections");

const db = require("./models");
db.sequelize.sync();

var corsOptions = {origin: "http://localhost:8080"};


app.use(cors(corsOptions)); 

// parse requests of content-type - application/json
app.use(bodyParser.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({​​​​​​​​extended: true}​​​​​​​​));
app.use(bodyParser.urlencoded({extended:true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuarios',usuariosRouter);
app.use('/productos',productosRouter);
app.use('/noticias',noticiasRouter);
app.use('/correos',correosRouter);
app.use('/telefonos',telefonosRouter);
app.use('/compras', comprasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
