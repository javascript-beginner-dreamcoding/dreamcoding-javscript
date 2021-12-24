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




function check() {
    for (let i = 0; i < 10; i++) {
     // wasting time 
     console.log('☺️');   
    }
    return true;
}


// ! (not) == 값을 반대로 
console.log(!value1);


// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 
console.log(stringFive == numberFive);
// 문자열이긴 한데 둘다 똑같은 5니까 true로 판단.
console.log(stringFive != numberFive);

console.log('==========================================');


// === strict equality, no type conversion 
// === 를 사용하면 같은 Five일지라도 다른 type이니 false를 return 한다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log('==========================================');

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2);  // false | ellie1과 ellie2에는 각각 다른 ref가 저장되어있어 false로 출력
console.log(ellie1 === ellie2);  // false | ellie1과 ellie2는 똑같은 type일 지라도 ref값이 달라 false
console.log(ellie1 === ellie3); // true | ellie1과 ellie3는 똑같나? ellie1이 가진 ref value를 3으로 할당해 1과 3은 똑같은 ref 라 true


//  equality - puzzler 
console.log('=============================================');
console.log(0 == false); // true | 0과 null empty string은 다 false로 간주될 수 있으니 true
console.log(0 === false); // false | 0은 boolean이 아니기에 typescrit equal을 이용하면 false 
console.log('' == false); // true | empty 문자열은 true
console.log('' === false); // false | empty 문자열은 boolean 문자열이 아니라 false
console.log(null == undefined); // true | null은 undefined은 같은 것으로 간주 
console.log(null === undefined); // false | null과 undefined는 다른 타입 false


// 8. Conditional operators: if
// if, else if, else
const name = 'aaa';
if (name === 'ellie') {
    console.log("Welcome, Ellie!");
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwon');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10.Switch statement 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS 
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default: 
        console.log('same you!');
        break;
}


// 11. Loops 
// while Loop, while the condition is truthy.
// body code is executed.

// while문으로 i가 3인데 i가 0보다 크니 출력이 한번되고 
// i의 값을 -1 감소시켜 2가된 후에 다시한번 물어서 -1이 감소되고 0까지 되니까
// i가 0보다 크니까 1에서 멈추게 된다. 
// let i = 3;
// while (i > 0) {
//     console.log(`while: ${i}`);
//     i--;
// }

// do while loop, body code is executed first,
// then check the condition.
// do while문은 먼저 블럭을 실행한다음 조건이 맞는지 아닌지 검사한다.
// 그래서 이것을 실행한뒤 i가 0이 되었는데도 do안에 블럭이 실행되서 출력이 먼저 되고나서 
// while문으로 i가 0인지 아닌지 검사할때 멈추게된다.
// do {
//     console.log(`do while: ${i}`);
//     i--;
// } while (i > 0);


// 블럭을 먼저 실행하고 싶다면 do & while문 조건문이 맞을때만 실행하려면 while문을 사용 


// for loop, for (begin: condition: step)
// 시작하는 문장 condition이 중간에 오고 그리고 마지막으로 어떤 스텝을 밞아나갈건지 명시되어 있다.
// 그래서 이곳에는 i는 3인데 i가 0보다 클때 console.log를 실행하고 출력하면서 감소하는 방식이다.

// 그래서 for&loop는 begin이 처음에 딱 한번만 호출되고 begin과 condition이 다 맞는지 안맞는지 검사한 다음 
// 블럭이 다 실행되면 step을 실행하게 된다. 그래서 condition이 다 안맞을때까지 실행하는 것이다.
// // 이렇게 기존에 변수에 값을 할당하는 경우가 있고 
// for (i = 3; i > 0; i--) {
//     console.log(`for: ${i}`);
// }

// // 반면 for안에 inline variable declartion이라고도 하는데 
// // 블록안에 let이라는 지역변수를 선언해 작성하는 것도 좋다.
// for (let i = 3; i > 0; i = i - 2) {
//     // inline variable declaration 
//     console.log(`inline variable for: ${i}`);
// }



// nested loops
// 이런 while이나 for같은 것은 서로 nasted해서 작성할 수 있는데
// 아래처럼 for문 안에 for문을 작성하면 i가 0일때 
// j를 0부터 9까지 돌리고, i가 1이 될때 다시 0부터 9까지 돌리게 된다.
// 이렇게 nasted를 돌리게 되면  O(n의 2승)과 같이 cpu에 좋지 않으니 되도록 피하자
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }


// break, continue
// Q1. 숫자를 0부터 10까지 짝수의 애들만 print해보자. 
// countinue를 이용해서 
// 0부터 10까지  돌면서  숫자가 홀수인 경우에는 
// continue 를 호출해 그 다음으로 console이 출력되지 않도록 넘어가면 된다.

for (let i = 0; i < 11; i++) {
    if(i % 2 === 0) {
        // continue를 궅이 쓸필요 없다.
        console.log(`q1, ${i}`);
        continue;
    }

}


console.log('=================================');

// Q2. 주어진 범위 0부터 10까지 looping 하는 애들을 만들어보자. 8을 만날때 

 for(let i = 0; i < 11; i++) {
     if (i > 8) {
         break;
     }
     console.log(`q2, ${i}`)
 }
//  끝 

