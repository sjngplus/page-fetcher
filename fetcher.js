const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const localFilePath = process.argv[3];

request(URL, (error, response, body) => {

  console.log('Error:', error); // Print the error if one occurred

  console.log('StatusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.writeFile(localFilePath, body, (writeError) => {
    if(writeError) {
      console.log("Error writing to file:", error);
    }
    //After writing to file
    const sizeOfFile = fs.statSync(localFilePath).size; 
    console.log(`Downloaded and saved ${sizeOfFile} bytes to ${localFilePath}`);
  }) 

});
