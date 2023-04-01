// function add(first, second) {
//     //if the value is not sent then value assigning system

//     // second = second || 0;
//     // if (second == undefined) {
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

//es6 default value assinging system
function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result = add(10)
console.log(result);