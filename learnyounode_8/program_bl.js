/**
 * Created by fsalles on 02/12/17.
 */
// npm install bl
'use strict';
const http = require('http');
const bl = require('bl');

http.get(process.argv[2], response => {
    response.pipe(bl((err, data) => {
        if (err) {
            console.error(err);
        }

        console.log(data.length);
        console.log(data.toString());
    }));
}).on('error', console.error);