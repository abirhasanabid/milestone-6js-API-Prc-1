const max = Math.max(12,324,657,9,90,46958,430);
// console.log(max);

const numbers = [12,34,4,55,6,76,7,8];
// console.log(Math.max(...numbers));
// console.log((Math.min(...numbers)));

// spared oprator in an array
const newNumbers = [1,2,3,4,5,67];
const newNames = [...newNumbers,28,29];
newNames.push(20);
console.log(newNames);
console.log(newNumbers);

// spared oprator in an Object
const mySelf = {name:'abid',age:12};
const newProperty = {...mySelf,thana:'pangsh'};
console.log(newProperty);
