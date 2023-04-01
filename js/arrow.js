// function declaration
function add(first, second) {
    const total = first + second;
    return total;
}

//short form
function add2(first, second) {
    return first + second;
}

//function expression(it is like variable declare)
const add3 = function add3(first, second) {
    const total = first + second;
    return total;
}

//anonymous function because name is not defined here after function
const add4 = function (first, second) {
    const total = first + second;
    return total;
}

//anonymous function because name is not defined here after function
const add5 = function (first, second) {
    return first + second;
}
//arrow function () act like parameter input of function and  => act as like return here
const add6 = (first, second) => first + second

const result = add(10, 12);
console.log(result);