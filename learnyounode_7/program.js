/**
 * Created by fsalles on 02/12/17.
 */
'use strict';
const http = require('http');

http.get(process.argv[2], response => {
    response.setEncoding('utf8');
    response
        .on('data', console.log)
        .on('error', console.error)
    ;
}).on('error', console.error);