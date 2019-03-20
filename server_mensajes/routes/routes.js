'use strict';
module.exports = function(app) {
  var rutasMensaje = require('../controllers/controladorMensajes');

  // Routes
  app.route('/mensaje')
    .get(rutasMensaje.obtener_todos)
    .post(rutasMensaje.crear);
   
   app.route('/usuario/:idUsuario')
    .get(rutasMensaje.obtener)
    .put(rutasMensaje.modificar)
};