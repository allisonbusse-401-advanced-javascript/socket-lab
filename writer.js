const io = require('socket.io-client')('http://localhost:7890');
const fs = require('fs').promises;
const writeFile = require('./file-writer');


io.on('file-write', contents => {
  return writeFile(contents.path, contents.contents)
  .then(data => {
    io.emit('file-saved')
  })
  .catch((error) => {
    io.emit('file-error', error)});
})