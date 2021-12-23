// 순수 바닐라 js를 사용할때 사용 
// Javscript is very flexible
// flexble == dangers 
// 유용하다는 것은 실수할 수 있다는 뜻도 된다.
// added ECMAScript5

'use strict';
console.log(age);
// 2.Variable == 변수 (변경될 수 있는 값);
// JS == let  (added in ES6)



// 두가지가 log되는 방식 == 어플리케이션을 실행하면 어플리케이션마다 사용할 수 있는 메모리 할당 
// 이 메모리는 텅텅 빈 상자
// 어플리케이션마다 사용할 수 있는 상자 제한

// 우리가 let을 사용해서 정하게 되면 한가지 박스를 가리킬 수 있는 포인터가 되는 것이다.

// 그래서 name이라는 변수가 가리키는 메모리 어딘가에 우리가 jungho라는 값을 저장 
// 그리고 추후에 name에 변수가 가리키는 곳 마다 다른 값을 넣어 저장할 수 있다.
// 
  

//  블록안에 정의하는 법 === block scope
// 블록안에 선언하면 더이상 블럭 밖에서는 블럭안에 내용을 볼 수 없다.
// {
//     let name = 'jungho';
//     console.log(name);
//     name = 'hello';
//     console.log(name);
// }

// 블럭 밖에서 log로 접근하게되면 아무값도 X 
// console.log(name);


// global scope ==  반대로 위와같이 블럭을 쓰지않고 파일안에다 변수로 선언해서 사용하는 법을 global scope라고 불림 
// 그래서 블럭 밖이나 안에서도 바깥에 있는 아이들이 보이기 떄문에 globalName이 출려된다.
// global한 변수들은 어플리케이션이 실행되는 순간부터 끝날때 까지 항상 메모리에 탑재되 최소한으로 쓰는것이 좋다.
// 가능면 class 나 함수 if나 필요한 부분에서만 정의하는 것이 좋다.

// Javascript에서 변수를 선언할 수 있는 방법은 딱하나 let
let globalName = 'global name';
{
    let name = 'jungho';
    console.log(name);
    name = 'hello';
    console.log(name);
     console.log(globalName);

}

console.log(name);
console.log(globalName);

// Es6이전 사용한 var (don't ever use this!)
// var hoisting (move declaration from bottom to top) = 항상 제일 위로 선언을 끌어올려줌.

// 선언도 하기전에 값 할당.
// console.log(age);
// age = 4;
// var age;

// var에는 block scope 가 없다 == var을 block scope을 철처히 무시한다.
// 이것은 초창기에 이런 유연성을 이용해 금방금방 프로그래밍을 짜도 동작하는 app을 만들었지만 
// 어느정도 규모있는 프로젝트를 하다보면 선언하지도 않는 값이 할당되 이상한일이 벌어지고 이 이유가 바로 var을 사용할때이다.

// 그래서 이런 위험성을 알고 있는 개발자들이 있었기 떄문에 let이 생긴것.
// 개발자들이 변수를 선언할때 let을 사용하라 하니 굳이 var을 사용할 이유 x 
{
    age = 4;
    var age;
}

console.log(age);

// // 값을 다시 log 하면 4가 나옴
// console.log(age);
// var age;

// // 이것을 다시 let을 이용하면 에러가 나오는게 정상 
// name = 4;
// let name;


// 3.Constants == 한번 할당하면 값이 절대 바뀌지 X
// favor immutable data type always for a fw reasons;
// - security (보안) - 한번 작성한 값을 다른 해커들이 코드를 이상한 것을 삽입해 값을 계속 변경하는 것을 immutable data type으로 방지할 수 있다.
// - thread safety (스레드 안정성) -  애플리케이션이 실행될때 한가지 프로세서가 할당 -> 그 프로세서 안에 다양한 thread가 존재하는데 동시에 돌아가면서 어플리케이션을 
// 동시에 조금 더 효율적이게 동작하도록 도와준다. 다양한 thread가 변수에 접근에 값을 변경할 수 있는데 동시에 값을 변경하는 것은 조금 위험할 수 있다.
// 그래서 가능한 값이 변하지 않는 것을 사용하는 것을 추천 
// - reduce human mistakes -  
// 그래서 앞으로 변경될 좋은 이유가 없다면 const를 이용해 프로그램을 작성하는게 좋은데
// 이렇게 해야 내가 나중에 코드를 변경하거나 다른 개발자가 코드를 바꿀 때 실수를 방지해줄 수 있다.


// 정리하자면 Javascript에서 변수를 선언할때

/* 
    Mutable Type(변경 가능한 유형)에 let 
    ImMutable Type(변경 불가한 유형)에 const 두가지가 있다.
*/

const daysInWeek = 7;
const maxNumber = 5;


// 4.Variable types
// primitive = single item: number, string, boolean, null, undefined | 더이상 나눠지지않는 타입 
// object, box container | object = 위 single item을 여러개 묶어 한 단위로 한 박스로 관리하게 해주는 기능이 object이다. 
// function, first-class function | function도 javscript에 데이터 타입 중 하나인데,
// first-class function = function도 데이터 타입처럼 변수에 할당이 가능하고 그렇기에 함수의 파라미터를 인자로 도 전달이 가능하고 
// 함수의 return type으로도 function을 return할 수 있다. 라는 뜻 


const count = 17; // integer = 정수
const size = 17.1; // decimal number = 소수점의 숫자 
//  값은 다르나 type은 똑같은 number로 할당.
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// number - spicla numeric value(특별한 값): infinity, -infinity, NagativeInfinity, nAn
// 그리고 이 세가지 값은 특별한 숫자의 값이고 이 게 중요한 이유가 나중에 DOM 요소를 javscript를 이용해 position을 
// 바꿔 온다던지 다양한 계산이 필요할때 나누고자 하는 값이 0 인지 아닌지 숫자인지 아닌지 
// 확인하지 않고 연산을 떄려박으면 숫자가 아닌 infinty(무한 루프)나 NaN(숫자가 아닌 값)을 받아 사용자에게 에러를 발생시킬 수 있다.

// 그래서 항상 연산 할 때 그 값이 정말 valid(유요한)한 값인지 확인하고 연산하는 것이 중요하다, 



const infinity = 1 / 0;  // infinity에 숫자 1을 을 0으로 나누면 infnity loof(무한 루프)를 돌게되면서 무한대의 숫자값이 생성 
const negativeInfinity = -1 / 0; // -nagetive(긍정)의 value를 나누게 되면ㅁ -infinty(nagetive-infinity) 값이 나온다.
const nAn = 'not a number' / 2; // 'not a number(숫자가 아닌 경우)'에 숫자로 나누게 되면 NaN이 출력
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt (fairy new, don't use it yet) = 새롭게 추가된 bigInt 
// bigInt는 최근에 추가된 기능이라 크롬이랑 파이어 폭스에만 지원하고, 사파리에서 열어보면 에러가 발생한다.
// 그래서 아직 다른 브라우저는 지원되지 않고 프로그래밍을 하면서 큰 범위의 숫자를 다루는 경우는 흔하지 않기 떄문에 
// 그냥 추가되었다고만 인식하자!.
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


// string  == 문자열 타입,
// string은 다른 프로그래밍 언어에서 char에 들어있는 데이터 타입은 따로 있지만 
// Javscript에서는 한가지 글자든 여러 글자든 다 string 타입으로 할당 된다.
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)

// 기존의 plus type을 이용한 방법 
// 단점 +  코드마다 +를 넣어줘야하는 단점이 있다.
console.log('value:' + helloBob + ' type: ' + typeof helloBob);

// 해결범 `` 기호를 사용면 중간에 쓰며진 간격이나 문자열이 그대로 나와 간편하게 string을 만들 수 있다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// boolean === 참과 거짓 
// false: 0, null, undefined, NaN, ''
// true: 1, any, other value 
const canRead = true;
const test = 3 < 1; // false 
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null  == '너는 텅텅 비어있는 mt값이라서 더는 아무것도 아니야';
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// undefined = '선언은 되었지만 아무것도 값이 지정되지 않음'
// 텅텅 비었는지 값이 들어있는지 정해지지 않은 상태
// let x;  // 값이 할당 되지 않는 상태도 undefined와 같다.

let x = undefined; // 정해지지 않은 상태이기 떄문에 undefined도 가능하다.

console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// symbol은 바로 출력할때 에러가 발생한다.
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);

//  그래서 항상 .description을 이용해 string으로 변환후 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// 5. Dynamic typing: dynamically typed language
//  C나 Java언어는 statically langauge,
// 즉 우리가 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같인 선언 하던 반면 
// Javscript에서는 선언할때 어떤 타입인지 선언하지 않고 런타입 프로그램이 동작할 때 
// 할당된 값에 따라서 타입이 변경될 수 있다는 것을 얘기한다.

// 이런 Dynamically type language는 내가 좋은 아이디어가 있을때 빠르게 
// Prototype(프로토타입) 하고 싶을 때는 정말 유연하게 쓸 수 있는 언어지만 다수에 엔지니어들이 아니면 
// 어느정도 규모가 있는 프로젝트를 만들때 이런 Dynamic Type 때문에 불똥이 떨어지는 일들이 한 두번이 아닐 수 있는데,
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));


// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};

// 각각에 포인트가 가리키고 있는 메모리에 다른값으로 할당이 가능
ellie.name = 'ellie';
ellie.age = 21;

 