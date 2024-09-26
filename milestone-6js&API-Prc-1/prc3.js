
const numbers = [23, 4, 89, 86, 6, 89, 100];
const avg = (arraNumbers) => {
    let sum = 0;
    const length = arraNumbers.length;
    for (const num of arraNumbers) {
        const squre = num ** 2;
        sum += squre;
    }
    return +(sum / length).toFixed(2);
}
const result = avg(numbers);
console.log(result);
