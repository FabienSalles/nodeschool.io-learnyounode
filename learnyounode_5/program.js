'use strict';
const fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = '.' + process.argv[3];


fs.readdir(dir, (err, data) => {
    if (err) {
        console.log(err);
    }

    const files = data.filter(file => ext === path.extname(file));

    console.log(files.join('\n'));
});