'use strict';

let Mensaje = require('../modules/modeloMensaje.js');

exports.obtener_todos = function(req, res) {
  Mensaje.obtener_todos(function(err, message) {
    
    if (err) {
      res.send(err);
    }
      
    console.log('Response', message);
    res.send(message);
  });
};



exports.crear = function(req, res) {
  var nuevoMensaje = new Mensaje(req.body);

  //handles null error 
  if(!nuevoMensaje.cuerpo || !nuevoMensaje.id_usuario) {
    res.status(400).send({ 
      error:true, 
      message: 'Ingrese su mensaje'
    });
  } else {
    Mensaje.crearMensaje(nuevoMensaje, function(err, message) {
    
      if ( err ) {
        res.send(err);
      }

      res.json(message);
    });
  }
};


exports.obtener = function(req, res) {
  Mensaje.obtenerPorId(req.params.idMensaje, function(err, message) {
    if (err) {
      res.send(err);
    }
    
    res.json(message);
  });
};


exports.modificar = function(req, res) {
  Mensaje.actualizarPorId(req.params.idMensaje, new Mensaje(req.body), function(err, message) {
    
    if (err) {
      res.send(err);
    }

    res.json(message);
  });
};

exports.obtener_existente = function(req, res) {
  Mensaje.obtener_existente(req.params.cuerpo, req.params.email, function(err, message) {
    
    if (err) {
      res.send(err);
    }

    res.json(message);
  });
};