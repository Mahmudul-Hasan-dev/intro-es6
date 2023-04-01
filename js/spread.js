const max = Math.max(1, 6, 3, 10, 192, 32)
// console.log(max);

// ...arrayName called spread operator which help us to get another array element and help us to create new element
const numbers = [12, 13, 435, 54, 656, 76];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

//reference element same variable to another variable
//if any changes happen to one variable then the change will happen in both variable

const numbers4 = numbers;
numbers4.push(23);
console.log(numbers);
console.log(numbers4)

//create new array by getting element from another array

const numbers2 = [...numbers];
numbers2.push(20);
console.log(numbers2);

//another way of creating element
const numbers3 = [12, 78, 30, ...numbers, 76, 65, 45];
console.log(numbers3)