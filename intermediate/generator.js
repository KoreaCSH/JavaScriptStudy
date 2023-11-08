// Generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

// iterable
// - Symbol.iterable 메서드가 있다.
// - Symbol.iterator 는 iterator 를 반환해야 한다.

// iterator
// - next 메서드를 갖는다.
// - next 메서드는 value 와 done 속성을 갖는 객체를 반환한다.
// - 작업이 끝나면 done 은 true 가 된다.


// function 옆에 * 을 붙이고, yield 에서 함수 실행을 멈출 수 있다.
function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    console.log(3);
    yield 2;
    console.log(4);
    yield 3;
    return "finish";
}

const a = fn();

a.next(); // 1
a.next(); // 2 3
a.next(); // 4