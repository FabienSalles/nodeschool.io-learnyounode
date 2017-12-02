/**
 * Created by fsalles on 02/12/17.
 */
const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
const sum = process.argv.splice(2).reduce(reducer);
console.log(sum);