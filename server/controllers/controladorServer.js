let url           = "http://localhost:3000/"
let urlMensaje    = "http://localhost:4000/"
const querystring = require('querystring')
const fetch       = require('node-fetch')
let path          = require('path')

exports.iniciar_sesion = async function(req, res) {

  let username  = req.body.nombre_de_usuario
  let email     = req.body.email 
  let rawUrl    = `${url}traer_usuario/${username}/${email}`
  let user
  
  user = await fetch(rawUrl).then((response) => response.json()).catch( (err) => {
    return false
  })
  
  if (user === undefined || user.length === 0) {
    return false
  }
  return user;
}

exports.get_data_user = async function( req, res) {
  let user_id  = req.params.id
  let rawUrl   = `${url}usuario/${user_id}`
  let user
  
  user = await fetch(rawUrl).then((response) => response.json()).catch( (err) => console.log(err))
  return user;
}

exports.guardarUsuario = function( req, res, callback ) {
  let rawUrl    = `${url}usuario`
  let data      = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nombre_de_usuario: req.body.nombre_de_usuario,
      email: req.body.email,
      id_status: 1
  }

  fetch(rawUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response)
  .catch(error => {
    console.error(error)
  })
}

exports.actualizarUsuario = function( req, res, callback ) {
  let user_id   = req.body.id_usuario
  let rawUrl    = `${url}usuario/${user_id}`
  let data      = {
      id: user_id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nombre_de_usuario: req.body.nombre_de_usuario,
      email: req.body.email,
      id_status: 1
  }

  fetch(rawUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response)
  .catch(error => {
    console.error(error)
  })
  
  return data
}

exports.guardarMensaje = function( data ) {
  let rawUrl    = `${urlMensaje}mensaje`
  let data_send = {
      cuerpo: data.mensaje,
      id_usuario: data.id_usuario,
      id_status: 1
  }

  fetch(rawUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data_send)
  })
  .then(response => response)
  .catch(error => {
    console.error(error)
  })
}