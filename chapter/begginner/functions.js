// Functions 
// - fundamental building block in ther program;
// - subprogram can be used multiple times
// - performs a task or calculates a value


// 1.Function declaration
// function name (param1, param2) { body... return; }
// one function === one thing 
// naming: doSomething, command, verb
// 함수를 두개로 나누면 꺠끗하게 사용 가능 
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}


printHello();


// 조금더 유용한 함수로 만드는법 
// parameter로 message를 전달해 전달된 message를 화면에 출력하도록 하는 것.
function log(message) {
    console.log(message);
}

log('sdsd');
log(12123);


// 2. Parameters
// premitive parameters: passed by value 
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);



// 3. Default parameters (added in ES6)
// 파라미터에 from = 'unkown'으로 default값을 지정하면 
// 사용자가 파라미터를 전달하지 않을때 값이 대체된다.
function showMessage(message, from = 'unknown') {
  
    // // 파라미터의값이 전달 되지 않을 경우를 대비
    // if (from === undefined) {
    //     from = 'unknown';
    // }


    console.log(`${message} by ${from}`);
}

showMessage('Hi!');


// 4. Rest paramets (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 간단하게 이런식으로  for & of를 이용해서 간단하게 출력할 수도 있다.
    for (const arg of args) {
        console.log(arg)
    }

    // 더 간단하게 하는 방법 
    // 배열의 forEach를 사용해 출력해도 된다.
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');


// 5. Local Scope 
let globalMessage = 'global'; // global variable 
function printMessage() {
    // 지역 변수 = 지역적이라 안에서만 접근 가능 
    let message = 'hello';
    // 밖에서는 접근이 불가하다.
    console.log(message); // local variable
    // 하지만 안에서는 globalMessage를 볼 수 있다.
    console.log(globalMessage);

    // 원직은 어는 곳에서나 적용이가능하다.
    // 이렇게 함수안에 함수를 선언할 수 있다.
   function printAnother() {
    console.log(message);
    let childMessage = 'hello'
 }

 // 자식안에 정의된 childMessage를 바로 부모 상위 위에서 보려고 한다면 
 // 에러가 발생한다.
//  console.log(childMessage); // error


 // return 타입이 없는 경우 생략 가능  
//  return undefined; // 이거랑 동일하다.
}

printMessage();

// console.log(message); // 불가 

// 정의하기도 전에 호출 가능 
sum(2,3);


// 6. Return a value 
function sum(a,b) {
    return a + b;
}

const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);


// 7. Early Return, early exit 
// bad 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}


// good 
function upgradeUser(user) {
    if (user.point <= 10) {
     return;
    }
    
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable 
// can be assigned as a value to variable 
// can be passed as an argument to other functions.
// can be returned by another function 

// 1. Function expression
// a function declaration can be called earlier then it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// 우리가 원하면함수의 이름을 정의할 수 있다. 이렇게 이름이 있는것을 named function이라고 불린다.
// const print = function print () { 

const print = function() {    // anonymous function == 함수의 이름이 없는것 
  console.log('print');
};
// print라는 변수에 함수를 호출하듯이 호출하면 바로 print호출
print();
// 그리고 다른 변수에 할당하면 결국 printAgaing은 print을 가리키디
const printAgain = print;
// 다시 함수를 호출하면 print
printAgain();

// sum이라는 함수를 만들었는데 이것도 sumAgain에 호출하면 된다.
const sumAgain = sum;
console.log(sumAgain(1,3));


// 2.Callback function using function expression 
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// annoymous fnction = 이름이 없는 
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces 
// recursions
const printNo = function print() {
    console.log('no!');

    // 또는 함수 안에서 자신 스스로 함수를 호출할때 사용한다.
    // print();
};


randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow functions 
// always annoymous 
// const simplePrint = function () {
//     console.log('simplePrint!');
// }


// Arrow Functions은  위 block코드를 간단하게 한다.
const simplePrint =  () => console.log('simplePrint!!');

// 이것도 간결하게
const add = (a, b) => a + b;


// 함수안에서 조금더 다양한 일들을 해야할때 아래 처럼 블럭 처리가 가능 
const simpleMultiply = (a, b) => {
    // do something more
    return a + b;
}

// IIFE : Immediately Invoked Function Expression 
(function hello() {
    console.log('IIFE');
})();


