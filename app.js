//1 & 2..................
array1 = ['apple', 'oranges', '', 'mango', '', 'lemon']
let array2 = array1.map((arrayData) => {
    return arrayData;
}).filter((data) => {
    if (data.length > 0) {
        return data;
    }
})
console.log(array2);


//3..............
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Programming');
console.log(hobbies);