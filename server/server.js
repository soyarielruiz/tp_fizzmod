const express 		= require('express')
const app 			= express()
const port 			= process.env.PORT || 9000
const bodyParser 	= require('body-parser')
const http 			= require('http').Server(app)
const io 			= require('socket.io')(http)
let path 			= require('path')
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

app.get('/logout', function (req, res) {
	res.render('index', { title: 'Logout - Fizzmod Chat'})
});

app.get('/chat', function (req, res) {
	res.render('message', { user_name: 'AAAAA'})
})

app.get('/registrate', function (req, res) {
  res.render('new_user', { title: 'Create User - Fizzmod Chat', update: false})
});


app.get('/actualizar/:id', async function ( req, res) {
	let result = await server_controller.get_data_user( req, res )
	let user_data = result[0]
	
  	res.render('new_user', { 
  		id_usuario: user_data.id,
  		nombre: user_data.nombre, 
  		apellido: user_data.apellido,
		username: user_data.nombre_de_usuario,
		email: user_data.email,
		update: true
	})
});

// POST request para inicio de sesion.
app.post('/iniciar_sesion', async (req, res) => {
  let result = await server_controller.iniciar_sesion( req, res )
  if (result) {
  	let user_data = result[0]
  	res.render('message', { user_name: user_data.nombre, user_id: user_data.id })	
  } else {
  	res.redirect('/')
  }
});

app.post('/guardarUsuario', (req, res) => {
	let result = server_controller.guardarUsuario( req, res, res.redirect('/conectarUsuario') )
})

app.post('/actualizarUsuario', ( req, res ) => {
	let result = server_controller.actualizarUsuario( req, res )
	res.render('message', { user_name: result.nombre, user_id: result.id })
})

app.get('/conectarUsuario', (req, res) => {
	res.render('index', { title: 'Usuario creado'})
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chatter', (full_message, message, user_id) => {
  	data = {
  		mensaje: message,
  		id_usuario: user_id 
  	}
    let result = server_controller.guardarMensaje( data )
    io.emit('chatter', full_message)
  })
})

var server = http.listen(port, () => {
  console.log('server is running on port', server.address().port);
});