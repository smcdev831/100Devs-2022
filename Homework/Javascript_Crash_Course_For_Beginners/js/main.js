console.log('Hello world');
console.error('This is an error');
console.warn('This is a warning');

//var, let, const -- let's not const use variables
// String, Numbers, Boolean, null, undefined

// let age = 30;
// age = 31;
//
// console.log(age);

// const age = 30;
// age = 31;
//
// console.log(age);

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof rating); //number
console.log(typeof isCool); //boolean
console.log(typeof x); //actually null, fake news
console.log(typeof y); //undefined
console.log(z); //undefined

//concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template string
console.log(`My name is ${name} and I am ${age}`);
