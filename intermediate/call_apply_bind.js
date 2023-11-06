// call, apply, bind
// 함수 호출 방식과 관계없이 this 를 지정할 수 있다.

const mike = {
    name: 'Mike'
};

const tom = {
    name: 'Tom'
};

const john = {
    name: 'John'
};

function showThisName() {
    console.log(this.name);
}

// 함수 내의 this 는 window 를 가리키기에 출력 X
showThisName();

// call 의 첫 번째 매개변수는 this 로 사용할 객체
showThisName.call(mike);
showThisName.call(tom);


function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// this 로 사용할 객체 뒤에 함수의 매개변수를 전달하면 된다.
update.call(mike, 1999, "BE");
// update.call(tom, 1995, "FE");


// apply 는 함수에 전달할 매개변수를 [] 배열로 전달한다.
update.apply(tom, [1995, "FE"]);

console.log(mike);
console.log(tom);


// bind 는 함수의 this 값을 영구히 변경할 수 있다.
const updateJohn = update.bind(john);
updateJohn(1990, 'police');

console.log(john);


// 종합 예제
const user = {
    name: 'Mike',
    showName: function() {
        console.log(`hello, ${this.name}`);
    }
};

user.showName();

let fn = user.showName;

fn(); // undefined
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();