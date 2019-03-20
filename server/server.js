const express 		= require('express')
const app 			= express()
const port 			= process.env.PORT || 9000
const bodyParser 	= require('body-parser')
const http 			= require('http').Server(app)
const io 			= require('socket.io')(http)
let path 			= require('path')
let url 			= "http://127.0.0.1:3000/"
const fetch    		= require('node-fetch')

//let server_controller = require("./controllers/controladorServer")


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index', { title: 'Login - Fizzmod Chat'});
});

app.get('/registrate', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/messages.html'));
})

// POST request para inicio de sesion.
app.post('/iniciar_sesion', (req, res) => {
  let username  = req.body.nombre_de_usuario
  let email     = req.body.email 
  let rawUrl    = `${url}usuario?nombre_de_usuario=${username}&email=${email}`
  let user      = {}

  async function get_user() {
  	await fetch(rawUrl)
    .then( response => {
    //do something  
    //res.render('chat', { name: "Ariel"});
    //{ name: "Ariel", verdad:"se envia"};
    console.log(response.json())
    return response.json()
    })
    .catch(error => {
    console.error(error)
    })
  }

  console.log(get_user())
  res.render("chat", { name : "AAAAAAAAAAAAAAAAAA" })
});

app.get('/olvideUsuario', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
})

io.on('connection', () =>{
  console.log('a user is connected')
})

var server = http.listen(port, () => {
  console.log('server is running on port', server.address().port);
});