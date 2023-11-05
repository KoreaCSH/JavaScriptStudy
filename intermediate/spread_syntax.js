// 전개 구문

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];
console.log(result);

let result2 = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result2);


// 참고 - 만약 전개 구문 없이 arr2, arr1 로 [4, 5, 6, 1, 2, 3] 을 만들려면?
arr2.reverse().forEach((num) => {
    arr1.unshift(num);
});

console.log(arr1);


let user = {name: 'Mike'};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = Object.assign({}, user, info, {
    skills : []
});

// 전개 구문 사용하지 않고 fe 와 lang 배열을 user.skills 넣기
// fe.forEach((skill) => {
//     user.skills.push(skill);
// });

// lang.forEach((skill) => {
//     user.skills.push(skill);
// });

// 전개 구문 활용
user = {
    ...user,
    ...info, 
    skills : [...fe, ...lang]
};

console.log(user);