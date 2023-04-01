//variable name act as function name
const add = (a, b) => a + b;
const fullName = (first, last) => first + ' ' + last;
const multiply = (c, d) => c * d;

//we will call variable name which act as function name
const result = multiply(7, 8);
console.log(result);


//more then two parameter
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

//no parameter function
const getPie = () => 3.1416;

//single parameter function
const doubleIt = (num) => num * 2;

//single parameter simple version
//in single parameter parameter bracket is not needed
const fivetimes = num => num * 5;

//multi line arrow function
//In this function activities should be in {}
//In this there should be return in function,nothing is return in multiline arrow
const doMath = (a, b, c, d) => {
    const firstSum = a + b;
    const secondSum = c + d;
    const multiply = firstSum * secondSum;
    return multiply;
}