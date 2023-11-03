let days = ['mon', 'tue', 'wed'];
console.log(days[1]);

// 배열의 길이 - 배열.length
console.log(days.length);


// 배열의 뒤에 요소 추가 - push()
days.push('thu');
console.log(days);

// 배열 가장 뒤 요소 삭제 - pop()
// days.pop();


// 배열의 앞에 요소 추가 - unshift()
days.unshift('sun');
console.log(days); 

// 배열의 가장 앞 요소 삭제 - shift()
// days.shift();

// 반복문은 일반적인 for 와 for ... of 문이 있다.
// cf) 객체를 순회할 때는 for ... in 문을 활용
for(let x of days) {
    console.log(x);
}