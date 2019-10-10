const io = require('socket.io-client')('http://localhost:7890');

io.on('file-read', data => {
  console.log('File has been read and the contents are:', data.contents);
});

io.on('file-write', data => {
  console.log('File contents have been capitalized and the contents are:', data.contents);
});

io.on('file-saved', () => {
  console.log('file has been saved');
});