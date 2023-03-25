const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.post('/create-file', (req, res) => {
  const folderPath = 'C:\Users\DELL\OneDrive\Desktop\Node File Task'; // Replace with the actual folder path
  const currentDate = new Date().toISOString().slice(0, 19).replace(/[-T]/g, ''); // Get current date-time in YYYYMMDDHHMMSS format
  const fileName = `${currentDate}.txt`;

  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, new Date().toString(), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      res.status(200).send('File created successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
