const fish = {
    name: 'king hilsha',
    address: 'chadpur',
    color: 'silver',
    phone: '2345678',
    price: 4000

}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

//alternative
//variable name should be same as property name of object
//right side will be object name
const { phone } = fish;
const { color } = fish;

//multiple variable/property access of object
const { age, profession } = { name: 'almas', age: 45, profession: 'pilot' };
console.log(age, profession);
console.log(phone);
console.log(color);

//array destructuring
const [first, another] = [40, 34]
const nayoks = ['sakib', 'ajij', 'antor'];
const [king, lost, notun] = nayoks;
console.log(notun);

//function destructuring
function getNames() {
    return ['alim', 'halim']
}

const [baba, chacha] = getNames();
console.log(chacha, baba);