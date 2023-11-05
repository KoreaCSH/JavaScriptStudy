// 구조 분해 할당

let [x, y] = [1, 2];

console.log(x);
console.log(y);


let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);


// 기본값
// c 에 값을 할당하지 않으면 undefined 가 저장된다.
let [a, b, c] = [1, 2];
console.log(c);

let [d=4, e=5, f=9] = [1, 2];
console.log(d); // 1
console.log(e); // 2
console.log(f); // 9


// 일부 반환값 무시
let [user4, , user5] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user4); // Mike
console.log(user5); // Jane


// 값 변경하기
let [n, m] = [1, 2];
[n, m] = [m, n];

console.log(n); // 2
console.log(m); // 1


// 객체 구조 분해
let user = {
    name : 'Mike',
    age : 30
};

let {name, age, gender = 'male'} = user;

console.log(name); // user.name 
console.log(age); // user.age
console.log(gender); // 값이 할당되어 있지 않기에 기본값인 'male' 할당


// 객체 구조 분해 - 변수명 변경

let {name: userName, age: userAge} = user;

console.log(userName);
console.log(userAge);