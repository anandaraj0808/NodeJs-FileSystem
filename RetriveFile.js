const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/text-files', (req, res) => {
  const folderPath = 'C:\Users\DELL\OneDrive\Desktop\Node File Task'; // Replace with the actual folder path

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading folder');
    } else {
      const textFiles = files.filter(file => path.extname(file) === '.txt');

      res.status(200).json(textFiles);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
