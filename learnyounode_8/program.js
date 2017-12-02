/**
 * Created by fsalles on 02/12/17.
 */
'use strict';
const http = require('http');

http.get(process.argv[2], response => {
    response.setEncoding('utf8');
    let nbCar = 0;
    let output = null;
    response
        .on('data', data => {
            nbCar += data.length;
            output = null === output ? data : output + data;
        })
        .on('error', console.error)
        .on('end', () => {
            console.log(nbCar);
            console.log(output);
        })
    ;
}).on('error', console.error);