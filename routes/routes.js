'use strict';
module.exports = function(app) {
  var rutasUsuario = require('../controllers/controladorUsuario');

  // Routes
  app.route('/usuario')
    .get(rutasUsuario.obtener_todos)
    .post(rutasUsuario.crear);
   
   /*app.route('/usuario/:usuarioId')
    .get(rutasUsuario.obtener)
    .put(rutasUsuario.modificar)
    .delete(rutasUsuario.borrar);*/
};