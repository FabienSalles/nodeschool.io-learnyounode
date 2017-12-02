'use strict';
const fs = require('fs');
const filePath = (function() {
    const filePath = process.argv[2];
    if (undefined === filePath || !fs.existsSync(filePath)) {
        throw Error('You have to specify a file path');
    }

    return filePath;
})();
const nbLine = fs.readFileSync(filePath, 'utf8').split('\n').length;
const lineBreak = 0 !== nbLine ? nbLine - 1 : 0;
console.log(lineBreak);
