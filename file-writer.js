const fs = require('fs').promises;

function writeFile(path, contents) {
  return fs.writeFile(path, contents)
    .then(contents => {
      return contents;
    });
}



module.exports = writeFile;