'use strict';
module.exports = function(app) {
  var rutasUsuario = require('../controllers/controladorUsuario');

  // Routes
  app.route('/usuario')
    .get(rutasUsuario.obtener_todos)
    .post(rutasUsuario.crear);
   
   app.route('/usuario/:idUsuario')
    .get(rutasUsuario.obtener)
    .put(rutasUsuario.modificar)

   app.route('/usuario/:usuario')
   	.get(rutasUsuario.obtener_existente)
};