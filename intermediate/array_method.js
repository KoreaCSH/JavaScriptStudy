// array method 예제

// arr.splice(n, m) n 번째부터 m 개의 요소 지우는 메서드
// 또한, splice() 는 삭제된 요소를 반환한다.
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);

console.log(arr);
console.log(result);

// arr.splice(n, m, x) n 번째부터 m 개의 요소 지우고 x 를 빈 자리에 추가
let arr2 = [
    "나는",
    "철수",
    "입니다"
];

arr2.splice(1, 0, "대한민국", "소방관");
console.log(arr2);


// arr.slice(n, m) - n 부터 m 까지 반환 (m 은 포함하지 않는다.)
let arr3 = [1, 2, 3, 4, 5];
let sliceResult = arr3.slice(1, 4);
console.log(sliceResult);

// arr.concat(arr2, arr3 .. ) : 합쳐서 새 배열 반환
let arr4 = [1, 2];
console.log(arr4.concat([3, 4], [5, 6]));
console.log(arr4.concat([3, 4], 5, 6)); // 배열이 아닌 값을 넣어도 괜찮다.


// 배열은 forEach 문으로 순회할 수 있다.
let arr5 = ["Mike", "Tom", "Jane"];

arr5.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});


// string 과 마찬가지로 indexOf() 메소드 사용 가능
// find() 메소드 사용하면 더 복잡한 연산 할 수 있다. 단, 조건에 맞는 요소를 발견할 경우 바로 return 한다.
// findIndex() 는 조건에 맞는 index 를 반환한다.
let arr6 = [1, 2, 3, 4, 5];
const findResult = arr6.find((item) => {
    return item % 2 === 0;
});

// 만약 find() 로 요소 찾지 못하면 undefined 를 반환한다.
console.log(findResult);


let userList = [
    {name : "Mike", age : 30},
    {name : "Jane", age : 27},
    {name : "Tom", age : 10}, 
    {name : "Jake", age : 10}
]

const notAdult = userList.find((user) => {
    if(user.age < 19) {
        return true;
    }
    return false;
});

console.log(notAdult);


// 만족하는 모든 요소를 반환 받고 싶다면 filter() 사용
const notAdult2 = userList.filter((user) => {
    if(user.age < 19) {
        return true;
    }
    return false;
});

console.log(notAdult2);


// arr.map()
let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id : index + 1,
        isAudlt : user.age > 19
    });
});

console.log(newUserList);


// 배열을 string 으로 합쳐주는 메소드 - join(delimeter)
let arr7 = ["안녕", "나는", "철수야"];
let joinResult = arr7.join(" ");
console.log(joinResult);
