// 1.String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 
'''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");


// 2. Numeric operators
console.log(1 + 1); // add 
console.log(1 - 1); // substract 
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 * 3); // exponentiation


// 3. Increment and decrement operators 
let counter = 2;
const preIncrement = ++counter;

// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
/// counter = counter + 1;\
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);


const preDecrement = --counter;

// counter = counter + 1;
// preIncrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--
// postIncrement = counter;
/// counter = counter + 1;\
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators == 할당하는 operators
let x = 3;
let y = 6;
x += y; // x = x + y; 반복되는 x를 생략 
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6); // less then
console.log(10 <= 6); // less then or equal
console.log(10 > 6); // greater then 
console.log(10 >= 6); // greater then or equal

// 6.  Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) = 어떤 것이 하나라도 true면 그냥 true
console.log(`or: ${value1 || value2 || check()}`);

// && (and) =  세가지 항목이 다 true가 되야만 true
console.log(`and: ${value1 || value2 || check()}`);

// often used to compress long if-statement 
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

// ! (not) == 값을 반대로 
console.log(!value1);


function check() {
    for (let i = 0; i < 10; i++) {
     // wasting time 
     console.log('☺️');   
    }
    return true;
}
