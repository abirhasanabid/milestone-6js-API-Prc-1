const sum = (a, b) => (a + b);
console.log(sum(3, 2));

// finding objects value by using arrow function
const obj = person => person.name;
const student = { name: 'samanta', age: 20 };
console.log(obj(student));

// finding array by using arrow function
const numbers = [1, 23, 4, 6, 789, 0, 4, 87];
const findNum = a => a[4];
console.log(findNum(numbers));

// 

function RegularFunction() {}
console.log(RegularFunction.prototype); // Prints the prototype object

const pi = ()=>Math.PI
console.log(pi());

