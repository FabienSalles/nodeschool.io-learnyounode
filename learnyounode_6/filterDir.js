'use strict';
module.exports = function(dir, ext, callback) {
    const fs = require('fs');
    const path = require('path');
    ext = '.' + ext;

    fs.readdir(dir, (err, data) => {
        if (err) {
            return callback(err);
        }

        const files = data.filter(file => ext === path.extname(file));

        callback(null, files);
    });
};