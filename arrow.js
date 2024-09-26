// reguler function
function add(num1, num2) {
    return num1 + num2;
}
const result = add(3, 5);
console.log(result);

//anonemus function
const functionForMulti = function (num1, num2) {
    return num1 * num2;
}
console.log(functionForMulti(3, 2));

// arrow function
const myFirstArrowFunction = (num1, num2) => num1 - num2;
console.log(myFirstArrowFunction(6, 3));

// using arrow function and defalt parameter value;
const divishion = (num1, num2 = 1) => num1 / num2;
console.log(divishion(6));



