var express = require('express');
var socket = require('socket.io');
// App setup
var app = express();
var server = app.listen(4000, function(){
  console.log('Server is listening to request on port 4000.');
});
// static files
app.use(express.static('public'));
// socket setup
var io = socket(server);
io.on('connection', function(socket){
  console.log('Made socket connection.'+ 'Socket id:- '+ socket.id);
})