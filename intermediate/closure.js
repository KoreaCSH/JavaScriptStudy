// 클로저 예제
// 클로저란 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부변수를 기억, 생성 이후에도 계속 접근 가능

function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); // add3 함수가 생성될 당시의 외부 변수 3을 기억

const add10 = makeAdder(10);
console.log(add10(20));

// add10 과 add3 은 별개이다.
console.log(add3(5));


function makeCounter() {
    let num = 0;

    return function() {
        return num++;
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2