// object destructring
const actor = {
    name: 'Samanta',
    phone: '01717273342',
    money: 385743584,
    age: 30
}
// const {name,age,money,phone:mobileNumber} = actor;
// const {age} = actor
// console.log(name);
// console.log(name);
// console.log(name);

// console.log(age);
// console.log(age);

// console.log(money);
// console.log(money);

// console.log(mobileNumber);


// array destructring

function fndnum() {
    return [1, 2, 3];
}
const [x, , y] = fndnum();
console.log(x, y);

// swapping array value;
const [a,b,z] = [1,23,5];
console.log(a,b,z);


