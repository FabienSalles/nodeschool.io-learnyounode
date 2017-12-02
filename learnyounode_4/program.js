/**
 * Created by fsalles on 02/12/17.
 */
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) {
        throw new Error('Error when we try to read the file' + filePath, err);
    }

    const nbLine = data.split('\n').length;

    const lineBreak = 0 !== nbLine ? nbLine - 1 : 0;
    console.log(lineBreak);
});

