const friends = ['abid', 'hridoy', 'rifat', 'nafim'];
const friend = (name) => {
    let evenName = [];
    for (const friend of name) {
        if (friend.length % 2 === 0) {
            evenName.push(friend);
        }
    }
    return evenName
}
const result = friend(friends);
console.log(result);



