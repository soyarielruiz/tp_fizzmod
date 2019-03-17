const express 		= require('express')
const app 			= express()
const port 			= process.env.PORT || 9000
const bodyParser 	= require('body-parser')
const http 			= require('http').Server(app)
const io 			= require('socket.io')(http)
let path 			= require('path')

let server_controller = require("./controllers/controladorServer")


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/registrate', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/messages.html'));
})

// POST request para inicio de sesion.
app.post('/iniciar_sesion', server_controller.iniciar_sesion);

app.get('/olvideUsuario', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
})


io.on('connection', () =>{
  console.log('a user is connected')
})

var server = http.listen(port, () => {
  console.log('server is running on port', server.address().port);
});