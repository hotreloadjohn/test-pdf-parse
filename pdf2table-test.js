var pdf2table = require('pdf2table');
var fs = require('fs');
 
fs.readFile('./27-moe-2022.pdf', function (err, buffer) {
    if (err) return console.log(err);
 
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
 
        rows.forEach((ele, index) => {
            if(ele[0].includes("Building of a New Primary School in Tampines")) {
                console.log(rows[index]);
            }
        });
    });
});