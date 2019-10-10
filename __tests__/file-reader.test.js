jest.mock('../file-reader.js', () => {
  return () => Promise.resolve('this is a fake file');
});

jest.mock('../file-writer.js', () => {
  return () => Promise.resolve('this is a fake file');
});

const readFile = require('../file-reader');
const writeFile = require('../file-writer');

describe('Read, Write, and Save a File', () => {
  const source = './hello.txt';
  const fileContents = 'this is a fake file';

  it('reads a file', () => {
    return readFile(source)
    .then(contents => {
      expect(contents).toBe(fileContents);
    })

  });

  it('writes a file', () => {
    return writeFile(source, fileContents)
      .then(contents => {
        expect(contents).toBe(fileContents);
      })
  })


})
