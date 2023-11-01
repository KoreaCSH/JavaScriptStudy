// Symbol 은 '유일한 식별자' 이어야 할 때 사용한다.
// Symbol() 로 만들 수 있다.

// 다른 개발자가 만든 객체
const user = {
    name : "Mike",
    age : 30
}

// user.showName = function() { } 으로 추가하면 기존 코드로 인해 의도하지 않은 값도 출력됨.
// 이를 방지하기 위해 Symbol 을 활용한다.
const showName = Symbol("show Name");
user[showName] = function() {
    console.log(this.name);
}
// symbol 로 showName 을 만들었기에 아래의 for 문에서 출력되지 않는다.

user[showName]();

// user 가 접속하면 보내는 메세지.
for(let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}