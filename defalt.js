function add(num1, num2=0) {
    const result = num1 + num2;
    console.log(num1, num2, result);

    return result
}
const result = add(3);;
// console.log(result);


// differnt kind of defalt function
function strings(firstName,lastName=''){
const result = firstName+' '+lastName;
console.log(result);

}
// strings('abid','hasan');
strings('abid');