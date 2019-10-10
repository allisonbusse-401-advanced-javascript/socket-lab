const io = require('socket.io-client')('http://localhost:7890');

io.on('file-read', contents => {
  contents.contents = contents.contents.toUpperCase();
  io.emit('file-write', contents);
});
