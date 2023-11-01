// Object Method 와 Computed Property 예제

// Computed Property
let n = "name";
let a = "age";

const user = {
    [n] : "Mike",
    [a] : 30,
    [1 + 4] : 5 // 계산식도 가능하다.
};

console.log(user);

// 어떤 값이 key 가 될 지 모르는 객체를 생성할 때 유용하다.
function makeObj(key, value) {
    return {
        [key] : value
    };
}

const obj = makeObj('age', 33);
console.log(obj);


// 객체 복사 - Object.assign(초깃값, 복사할 객체)
const user2 = Object.assign({}, user);
user2.name = "CSH";

console.log(user);
console.log(user2);


// 객체 Key 값을 배열로 반환 - Object.keys(객체)
const keys = Object.keys(user);
console.log(keys);


// 객체 values 값을 배열로 반환 - Object.values(객체)
const values = Object.values(user);
console.log(values);


// 객체의 key - value 값을 반환 - Object.entries(객체)
const entries = Object.entries(user);
console.log(entries);


// 배열을 Object 로 만들어주는 함수 - Object.
let arr = [
    ['mon', '월'], 
    ['tue', '화']
];

const result = Object.fromEntries(arr);
console.log(result);