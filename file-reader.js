const fs = require('fs').promises;

function readFile(file) {
  return fs.readFile(file, { encoding: 'utf8' })
    .then(contents => {
      return contents;
    })
}



module.exports = readFile;