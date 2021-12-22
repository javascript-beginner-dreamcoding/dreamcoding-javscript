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