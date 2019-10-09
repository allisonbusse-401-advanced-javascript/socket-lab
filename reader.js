const io = require('socket.io-client')('http://localhost:7890');
const readFile = require('./file-reader');

return readFile(process.argv[2])
  .then(contents => {
    io.emit('file-read', contents);

  })
// console.log(fileName);


