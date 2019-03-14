const express = require('express');
const path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;
var socket = require('socket.io');

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
var server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));



// socket setup
var io = socket(server);
io.on('connection', function(socket){
  console.log('Made socket connection.'+ 'Socket id:- '+ socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  })
})