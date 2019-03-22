'user strict';
let sql = require('./db');

//Usuario object constructor
let Usuario = function(usuario) {
    console.log(usuario)
    this.nombre  = usuario.nombre
    this.apellido = usuario.apellido
    this.nombre_de_usuario = usuario.nombre_de_usuario
    this.email = usuario.email
    this.id_status = usuario.id_status
};

Usuario.obtener_todos = function obtener_todos(result) {
    sql.query("SELECT * FROM usuarios", function (err, res) {
        if(err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log('Usuario : ', res);  
            result(null, res);
        }
    });
};

Usuario.crearUsuario = function crearUsuario(nuevoUsuario, result) {    
    sql.query("INSERT INTO usuarios SET ?", nuevoUsuario, function (err, res) {
        if( err ) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};

Usuario.obtenerPorId = function obtenerPorId(id_usuario, result) {
    sql.query(`SELECT * FROM usuarios WHERE id = ? `, id_usuario, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });   
};

Usuario.actualizarPorId = function actualizarPorId(id, usuario, result){
    sql.query(`UPDATE usuarios 
        SET nombre = ? , apellido = ? , nombre_de_usuario = ? , email = ? , id_status = ? 
        WHERE id = ? `, 
        [usuario.nombre, usuario.apellido, usuario.nombre_de_usuario, usuario.email, usuario.id_status, id], function (err, res) {
        
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {   
            result(null, res);
        }
    }); 
};

Usuario.obtener_existente = function obtener_existente(nombre_usuario, email, result) {
    sql.query(`SELECT * FROM usuarios WHERE nombre_de_usuario = ? AND email = ? `,  [nombre_usuario, email] , function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


module.exports= Usuario;