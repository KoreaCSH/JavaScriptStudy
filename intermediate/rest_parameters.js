// 나머지 매개변수

function showName(name) {
    // arguments 는 함수 내에서 이용 가능한 지역 변수
    // 함수로 넘어온 모든 인수에 접근 가능하다.
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(name);
}

// Error 는 발생하지 않는다.
// JS 에서 함수에 넘겨주는 인수 개수 제한 없음. 개수 맞출 필요도 없다.
showName('Mike', 'Tom');
showName('Mike');


// ES6 환경에서는 나머지 매개변수 활용을 권장

function showName2(...names) {
    console.log(names);
}

showName2(); // undefined 가 아닌 [] 빈 배열을 반환한다.
showName2('Mike'); // ['Mike'] 마찬가지로 배열을 반환.
showName2('Mike', 'Tom');


// 전달 받은 모든 인수를 더하는 예제
function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => {
        result += num;
    })
    console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// 나머지 매개변수는 항상 마지막에 위치해야 한다.
function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'react');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);