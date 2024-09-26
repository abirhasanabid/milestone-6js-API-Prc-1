const array1 = [23, 45, 78, 678, 99, 5, 8, 90];
const array2 = [32, 54, 80, 78, 91, 7, 8, 190];

const combain = (arr1, arr2) => {
    const marges = [...arr1, ...arr2];
    let maxNumber = marges[0];
    for (const marge of marges) {
        if (marge > maxNumber) {
            maxNumber = marge;
        }
    }
    return maxNumber;


}
const result = combain(array1, array2);
console.log(result);
