const line = "helo i am here"
const line1 = 'hello i am here to see you'
const line2 = `hello 
i am here to see you
 comment as multiline`

console.log(line2);


///template string example
const a = 10;
const b = 20;
const summary = 'sum of ' + a + 'and' + b + 'is'
console.log(summary);

// \n makes a new line
//template string here
//template string use backtick
//to put variable in template string we have to use format(this is also called placeholder): ${var}
const summary2 = `sum of ${a} and ${b} is : ${a + b}`
console.log(summary2)