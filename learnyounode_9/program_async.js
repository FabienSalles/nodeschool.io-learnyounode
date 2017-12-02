/**
 * Created by fsalles on 02/12/17.
 */
// npm install async
const http = require('http');
const async = require('async');
const urls = process.argv.splice(2);

const getContent = (url, callback) => {
    let output = null;
    http.get(url, response => {
        response.setEncoding('utf8');
        response
            .on('data', (data) => output = null === output ? data : output + data)
            .on('error', (error) => callback(console.error))
            .on('end', () => callback(null, output))
        ;
    });

    return output;
};

async.map(urls, getContent, (err, results) => console.log(results.join('\n')));
