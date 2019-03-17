'use strict';
let url = "http:/localhost:3000/";
const querystring = require('querystring');


exports.iniciar_sesion = function(req, res) {
  let request = require("request");
  let username  = req.body.nombre_de_usuario
  let email     = req.body.email 
  let rawUrl    = `${url}usuario?nombre_de_usuario=${username}&email=${email}`
  let parsedUrl = url.parse(rawUrl);
  let parsedQs = querystring.parse(parsedUrl.query);
  
  var options = {
        url: parsedQs,
        method: 'get',
        json: true,
        body : {
          nombre_de_usuario : username,
          email : email
        },
    }

  let result = request(options, function (error, response, body) {
    //if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage. 
    //}
  })

   /*result.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
    }, function(err) {
        console.log(err);
    })*/
   
  res.send('NOT IMPLEMENTED: Inicio sesion')
};