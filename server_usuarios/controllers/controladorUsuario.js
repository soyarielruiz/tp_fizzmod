'use strict';

let Usuario = require('../modules/modeloUsuario.js');

exports.obtener_todos = function(req, res) {
  Usuario.obtener_todos(function(err, user) {

    if (err) {
      res.send(err);
    }

    res.send(user);
  });
};



exports.crear = function(req, res) {
  var nuevoUsuario = new Usuario(req.body);

  //handles null error 
  if(!nuevoUsuario.nombre || !nuevoUsuario.nombre_de_usuario) {
    res.status(400).send({ 
      error:true, 
      message: 'Ingrese Nombre de Usuario' 
    });
  } else {
    Usuario.crearUsuario(nuevoUsuario, function(err, usuario) {
    
      if ( err ) {
        res.send(err);
      }

      res.json(usuario);
    });
  }
};


exports.obtener = function(req, res) {
  Usuario.obtenerPorId(req.params.idUsuario, function(err, usuario) {
    if (err) {
      res.send(err);
    }
    
    res.json(usuario);
  });
};


exports.modificar = function(req, res) {
  Usuario.actualizarPorId(req.params.idUsuario, new Usuario(req.body), function(err, usuario) {
    
    if (err) {
      res.send(err);
    }

    res.json(usuario);
  });
};

exports.obtener_existente = function(req, res) {
  Usuario.obtener_existente(req.params.nombre_usuario, req.params.email, function(err, usuario) {
    
    if (err) {
      res.send(err);
    }
    return res.json(usuario);
  });
};