'use strict';

let Usuario = require('../modules/modeloUsuario.js');

exports.obtener_todos = function(req, res) {
  Usuario.obtener_todos(function(err, task) {

    console.log('Controller')
    if (err) {
      res.send(err);
    }
      
    console.log('Respose', task);
    res.send(task);
  });
};



exports.crear = function(req, res) {
  var nuevoUsuario = new Usuario(req.body);

  //handles null error 
  if(!nuevoUsuario.nombre || !nuevoUsuario.usuario) {
    res.status(400).send({ error:true, message: 'Ingrese Nombre de Usuario' });
  } else {
    Usuario.crearUsuario(nuevoUsuario, function(err, task) {
    
      if ( err ) {
        res.send(err);
      }

      res.json(task);
    });
  }
};


/*exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};*/