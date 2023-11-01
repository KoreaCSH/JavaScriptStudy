// 10진수 -> 2진수
let num = 10;
num.toString(); // 10진수 그대로
console.log(num.toString(2)); // 2진수
console.log(num.toString(16)); // 16진수

let num2 = 255;
console.log(num2.toString(16)); 

let num3 = 5.1;
let num4 = 5.7;

// Math.ceil() 올림, Math.floor() 내림, Math.round() 반올림
console.log(Math.ceil(num3));
console.log(Math.ceil(num4));

console.log(Math.round(num3));
console.log(Math.round(num4));

// 소수점 자릿수 - toFixed()
// 단 string 을 반환하므로 Number() 로 숫자형으로 반환하자
let someRate = 19.12343;
console.log(someRate.toFixed(0));
console.log(someRate.toFixed(2));
console.log(someRate.toFixed(10));
console.log(typeof someRate.toFixed(0));

// 어떤 변수가 NaN 인지 확인하는 방법은 isNaN() 함수를 사용하는 방법 뿐이다.
let a = Number('a');
console.log(isNaN(a));

// parseInt 는 문자열이 섞여있더라도 숫자가 있는 부분은 숫자형으로 반환한다.
let margin = '10px';
console.log(parseInt(margin));

// parseInt 로 16진수를 받아야 하는 경우, 두 번째 인수로 16을 전달한다.
let redColor = 'f3';
console.log(parseInt(redColor, 16));

// 소수점까지 받기 위해서는 parseFloat() 을 활용한다.
let padding = '18.5%';
console.log(parseFloat(padding));

// 최댓값 Math.max(), 최솟값 Math.min()
console.log(Math.max(-1, 2, 3, 5.5, 10));
console.log(Math.min(-1, 2, 3, 5.5, 10));
