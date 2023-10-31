// Java 와 달리 접근제어자, 리턴 타입, 매개변수 타입 등이 없다.
// 함수 선언문을 활용한 함수 - 어디에서든 호출 가능하다.

function sayHello(name) {
    let msg = 'Hello, ';
    if(name) {
        msg += name;
    }
    console.log(msg);
}

sayHello("Mike");
sayHello();


function showError() {
    alert('에러가 발생했습니다. 다시 시도해주세요');
}

//showError();


// default value
function sayHello2(name) {
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`;
    console.log(msg);
}

sayHello2();
sayHello2("Mike");


// default value 2 - 매개변수에 기본값 설정하기
function sayHello3(name = 'friend') {
    let msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello3();
sayHello3("Mike");


// return 으로 값 반환
function add(num1, num2) {
    return num1 + num2;
}

const result = add(1, 2);
console.log(result);

// 함수 표현식을 활용한 함수 - 코드에 도달하면 생성하기에, 호출한 이후에만 사용 가능하다.
let sayHello4 = function(name) {
    console.log(name);
}

sayHello4("CSH");


// Arrow Function (화살표 함수)
let add2 = (num1, num2) => {
    return num1 + num2;
}

let add3 = (num1, num2) => (
    num1 + num2
);

console.log(add2(1, 3));