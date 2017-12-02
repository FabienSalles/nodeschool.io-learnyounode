/**
 * Created by fsalles on 02/12/17.
 */
'use strict';
const filterDir = require('./filterDir');

filterDir(process.argv[2], process.argv[3], (err, files) => {
   if (err) {
       console.log(err);
   }

   console.log(files.join('\n'));
});