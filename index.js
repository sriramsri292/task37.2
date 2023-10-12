const express = require("express");
const http_server = express();
const port = 5000;
const fs = require('fs').promises;

const content = new Date().toString();

async function createFile() {
  try {
    await fs.writeFile('./files/test.txt', content);
    console.log('File written successfully');

    try {
      const data = await fs.readFile('./files/test.txt', 'utf8');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  } catch (err) {
    console.error(err);
  }
}



http_server.listen(port, 'localhost', () => {
    console.log("Server is running on port " + port);
});

http_server.use('/', (req, res, next) => {
    console.log("hai bro");
    createFile();
    return res.status(200).json({
        message:" hellow buddy",
        number:9848,
        number:6,
        
    })
  
});
