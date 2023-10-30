// 문자형 String
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy";
const message2 = 'I\'m a boy';

// ES6 부터 도입된 Template Literal - ` 백틱 활용
// 줄바꿈 및 표현식 삽입 가능
// 표현식 삽입 예제
const message3 = `My name is ${name1}`;
console.log(message3);

// 표현식 삽입 내에서는 연산도 가능하다.
const message4 = `My age is ${30 + 2}`;
console.log(message4);


// 숫자형 Number - 사칙연산 가능
const age = 30;
const PI = 3.14;

// 숫자를 0 으로 나누면 Infinity 를 얻는다.
const x = 1/0;
console.log(x);

// String 을 숫자로 나누면 NaN = Not a Number 를 얻는다.
const y = name1 / 2;
console.log(y);


// Boolean
const a = true;
const b = false;

console.log(name1 == 'Mike');


// null 과 undefined
// null 은 존재하지 않는 값
// undefined 는 값이 할당되지 않았음을 의미

let num; 
console.log(num);

// user 는 존재하지 않음ㅇ르 의미
let user = null;
console.log(user);


// typeof 연산자
console.log(typeof 3);
console.log(typeof name1);

// null 은 object 가 아니지만, object 를 반환한다.
console.log(typeof null);