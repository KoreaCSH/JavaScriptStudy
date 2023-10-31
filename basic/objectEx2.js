// method - 객체 내부에서 프로퍼티로 정의된 함수
let boy = {
    name : "Mike",
    showName : function() {
        console.log(boy.name);
    }
};

boy.showName();

let man = boy;
man.name = "Tom";

// man 의 name 을 변경하면 boy 의 name 도 변경된다.
console.log(boy.name);

// boy 의 showName 이 boy.name 일 때, boy 를 null 로 변경하면 man.showName() 도 동작하지 않는다.
boy = null;
// man.showName();


// 이를 해결하기 위해 this 를 활용한다. 
// this 는 해당 객체를 가리킨다.
let boy2 = {
    name : "CSH", 
    showName : function() {
        console.log(this.name);
    }
};

let man2 = boy2;

boy2 = null;
// 이제 정상적으로 출력된다.
man2.showName();


// 주의 : 객체의 method 를 화살표 함수로 작성하게 되면, this 는 객체가 아닌 window 를 가리키게 된다.
// 그러므로 객체의 메서드는 화살표 함수로 작성하지 않는 것이 좋다.