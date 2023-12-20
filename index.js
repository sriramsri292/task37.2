const express = require("express");
const http_server = express();
const port = 5000;
const fs = require('fs').promises;
const moment = require('moment'); // Add this line to use the moment library

const folderPath = './files/'; // Use a descriptive folder name

async function createFile() {
  try {
    // Ensure the folder exists
    await fs.mkdir(folderPath, { recursive: true });

    // Generate the filename with current date and time
    const fileName = moment().format('YYYY-MM-DD HH-mm-ss') + '.txt';

    // Create the file with the current timestamp
    await fs.writeFile(folderPath + fileName, new Date().toString());
    console.log('File written successfully:', fileName);

  } catch (err) {
    console.error('Error:', err);
  }
}

// Create a specific endpoint for creating the text file
http_server.post('/createFile', async (req, res) => {
  try {
    await createFile();
    return res.status(200).json({
      message: "File created successfully",
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

http_server.listen(port, 'localhost', () => {
    console.log("Server is running on port " + port);
});
