// Array 의 sort() 와 reduce() 예제

let arr = [1, 5, 2, 4, 3];
arr.sort();

console.log(arr);


// 해당 예제는 제대로 sort() 되지 않는다. 문자열로 치부되어 앞자리가 1인 13이, 2인 27이 첫 번째와 두 번째에 위치하게 된다.
let arr2 = [13, 27, 5, 3];
arr2.sort();

console.log(arr2);

// 이를 해결하기 위해 Java 처럼 sort() 내부에 정렬 로직을 담은 함수를 전달한다.
function comparator(n, m) {
    return n - m;
}

arr2.sort(comparator);

console.log(arr2);


// 함수를 정의하지 않고 화살표 함수를 전달해도 된다.
let arr3 = [13, 27, 5, 3];
arr3.sort((a, b)=> {
    return a - b;
});

console.log(arr3);


// 배열의 모든 수 합치기
let arr4 = [1, 2, 3, 4, 5];

// forEach 문, for 문 사용 가능
let sum = 0;
arr4.forEach((num) => {
    sum += num;
})

console.log(sum);

// prev 는 현재 누적 값, cur 은 현재 요소를 가리킨다. 함수 뒤 두 번째 인자는 초깃값이다.
const result = arr4.reduce((prev, cur) => {
    return prev + cur;
}, 0);

console.log(result);


let userList = [
    {name : "Mike", age : 30},
    {name : "Jane", age : 27},
    {name : "Tom", age : 10}, 
    {name : "Jake", age : 10},
    {name : "Sue", age : 42}, 
    {name : "Kane", age : 31}
]

let result2 = userList.reduce((prev, cur) => {
    // 성인이라면 prev 에 현재 가리키고 있는 cur 을 배열에 추가.
    if(cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result2);

let userAgeSum = userList.reduce((prev, cur) => {
    return prev += cur.age;
}, 0);

console.log(userAgeSum);

