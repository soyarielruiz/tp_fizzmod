const express 	= require('express'),
  app 			= express(),
  bodyParser 	= require('body-parser');
  port 			= process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const my_connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty123',
    database: 'api_rest'
});
 
// connect to database
my_connect.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(app); //register the route