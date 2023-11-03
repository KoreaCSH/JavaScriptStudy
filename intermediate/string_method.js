// string method 예제

// toUpperCase(), toLowerCase()
let desc = "Hi guys, Nice to meet you."
let upperCase = desc.toUpperCase();
console.log(upperCase);

console.log(desc.toLowerCase());


// length
console.log(desc.length);


// indexOf(text) - 없으면 -1 을 반환한다.
console.log(desc.indexOf("to"));
console.log(desc.indexOf("man"));


// slice(n, m) - 특정 범위의 문자열만 반환
let desc2 = "abcdefg";
console.log(desc2.slice(2));
console.log(desc2.slice(0, 5));
console.log(desc2.slice(0, -2)); // 두 번째 인자가 음수라면 뒤에서 부터 센다.


// str.substring(n, m) - n 과 m 을 바꿔도 동작한다.
// ex) str.substring(2, 5) 와 str.substring(5, 2) 는 동일하게 동작한다.

// str.substr(n, m) - index n 에서부터 m 개까지를 반환
console.log(desc2.substr(2, 3));


// str.trim() - 앞 뒤 공백 제거
let desc3 = "   coding      ";
console.log(desc3.trim());


// str.repeat() - 문자열을 반복하는 함수
let str = "hello!";
console.log(str.repeat(3));


let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let title of list) {
    newList.push(title.slice(4));
}

console.log(newList);


// 금칙어 : 콜라
// indexOf 대신 includes() 를 사용할 수도 있다.
function hasCoke(str) {
    if(str.indexOf("콜라") > -1) {
        console.log("금칙어가 있습니다.")
    }
    else {
        console.log("통과");
    }
}

hasCoke("와 사이다가 짱이야!");
hasCoke("무슨 소리, 콜라가 최고!");
hasCoke("콜라");


