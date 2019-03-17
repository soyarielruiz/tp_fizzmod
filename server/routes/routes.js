'use strict';

module.exports = function(app) {
  var rutas = require('../controllers/controladorServer');

  // Routes
  app.route('/')
    .get(rutas.showLogin)
   
   /*app.route('/usuario/:idUsuario')
    .get(rutasUsuario.obtener)
    .put(rutasUsuario.modificar)*/
};