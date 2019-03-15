'user strict';
var sql = require('./db');

//Task object constructor
var Usuario = function(usuario) {
    this.usuario = usuario.usuario;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.nombre = usuario.status;
};

Usuario.crearUsuario = function crearUsuario(nuevoUsuario, result) {    
    sql.query("INSERT INTO usuario SET ?", nuevoUsuario, function (err, res) {
        if( err ) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

/*Task.getTaskById = function createUser(taskId, result) {
        sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};*/
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

/*Task.updateById = function(id, task, result){
  sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Task.remove = function(id, result){
     sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};*/

module.exports= Usuario;