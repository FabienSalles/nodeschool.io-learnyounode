/**
 * Created by fsalles on 02/12/17.
 */
'use strict';
const http = require('http');
const urls = process.argv.splice(2);


// Promise first solution
// let promises = [];
// urls.forEach(url => {
//     promises.push(new Promise((resolve, reject) => {
//         let output = null;
//         http.get(url, response => {
//             response.setEncoding('utf8');
//             response
//                 .on('data', (data) => output = null === output ? data : output + data)
//                 .on('error', (error) => reject(error))
//                 .on('end', () => resolve(output))
//             ;
//         });
//     }));
// });
//
// Promise.all(promises).then((output) => console.log(output.join('\n')));

// Promise second solution
const getContent = (url) => {
    return new Promise((resolve, reject) => {
        let output = null;
        http.get(url, response => {
            response.setEncoding('utf8');
            response
                .on('data', (data) => output = null === output ? data : output + data)
                .on('error', (error) => reject(error))
                .on('end', () => resolve(output))
            ;
        });
    });
};

const promises = urls.map(getContent);

Promise.all(promises).then((output) => console.log(output.join('\n')));

