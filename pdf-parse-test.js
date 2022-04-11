const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync("27-moe-2022.pdf");
 
pdf(dataBuffer).then(function(data) {

    // PDF text
    console.log(data.text);
     
        
});