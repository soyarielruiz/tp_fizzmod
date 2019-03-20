'user strict';
let sql = require('./db');

//Mensaje object constructor
let Mensaje = function(mensaje) {
    this.cuerpo  = mensaje.cuerpo
    this.id_usuario = mensaje.id_usuario
    this.id_status = mensaje.id_status
};

Mensaje.obtener_todos = function obtener_todos(result) {
    sql.query("SELECT * FROM mensajes", function (err, res) {
        if(err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log('Usuario : ', res);  
            result(null, res);
        }
    });
};

Mensaje.crearMensaje = function crearMensaje(nuevoMensaje, result) {    
    sql.query("INSERT INTO mensajes SET ?", nuevoMensaje, function (err, res) {
        if( err ) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Mensaje.obtenerPorId = function obtenerPorId(id_mensaje, result) {
    sql.query(`SELECT * FROM mensajes WHERE id = ? `, id_mensaje, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });   
};

Mensaje.actualizarPorId = function actualizarPorId(id, mensaje, result){
    sql.query(`UPDATE mensajes 
        SET cuerpo = ? , id_usuario = ? , id_status = ? 
        WHERE id = ? `, 
        [mensaje.nombre, mensaje.id_usuario, mensaje.id_status, id], function (err, res) {
        
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {   
            result(null, res);
        }
    }); 
};

module.exports= Mensaje;