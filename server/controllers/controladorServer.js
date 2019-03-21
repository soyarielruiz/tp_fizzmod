let url           = "http://localhost:3000/"
const querystring = require('querystring')
const fetch       = require('node-fetch')
let path          = require('path')

exports.iniciar_sesion = function(req, res) {

  let username  = req.body.nombre_de_usuario
  let email     = req.body.email 
  let rawUrl    = `${url}usuario?nombre_de_usuario=${username}&email=${email}`
  let user

  /*function conectedUser( response ) {
    console.log(response)
    console.log("pasa por conected")
    res.redirect('/inicio_chat')
  }*/

  let func_data = (rawUrl) => {
    return fetch(rawUrl).then(response => {
      Promise.all([ response.nombre, response.json()])
    })
    .then(([nombre, jsonData])=> {
        console.log(jsonData)
        console.log(nombre)
        return jsonData
    })
    .catch(error => {
      console.error(error)
    })
  } 

  /*retData = async (rawUrl) => {
    try {
      const res = await fetch(rawUrl);
      const {data} = res
      return data
    } catch (err) {
      console.log(err)
    }
  }*/

  user = func_data(rawUrl)
  console.log(" finalmente ")
  console.log(user)
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
  .then(response => /*callback(*/response)
  .catch(error => {
    console.error(error)
  })
}