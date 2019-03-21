const express 		= require('express')
const app 			= express()
const port 			= process.env.PORT || 9000
const bodyParser 	= require('body-parser')
const http 			= require('http').Server(app)
const io 			= require('socket.io')(http)
let path 			= require('path')
let url 			= "http://127.0.0.1:3000/"
const fetch    		= require('node-fetch')

let server_controller = require("./controllers/controladorServer")


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index', { title: 'Login - Fizzmod Chat'})
});

app.get('/registrate', function (req, res) {
  res.render('new_user', { title: 'Create User - Fizzmod Chat'})
});

// POST request para inicio de sesion.
app.post('/iniciar_sesion', (req, res) => {
  let result = server_controller.guardarUsuario( req, res )
  console.log(result)
  res.render('chat', { title: 'Inicio bien!!'})
});

app.get('/inicio_chat', (req, res) => {
	console.log(req)
	res.render('chat', { title: 'Inicio bien!!'})
})

app.post('/guardarUsuario', (req, res) => {
	let result = server_controller.guardarUsuario( req, res, res.redirect('/conectarUsuario') )
})

app.get('/conectarUsuario', (req, res) => {
	console.log(req)
	res.render('index', { title: 'Creado!!!'})
})

app.get('/olvideUsuario', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
})

io.on('connection', () =>{
  console.log('a user is connected')
})

var server = http.listen(port, () => {
  console.log('server is running on port', server.address().port);
});