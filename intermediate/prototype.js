// 상속과 prototype

const user = {
    name: 'Mike'
};

// hasOwnProperty 는 __proto__ 에 있다.
console.log(user.hasOwnProperty('name'));


const user2 = {
    name: 'John',
    hasOwnProperty: function() {
        console.log("overriding");
    }
}

console.log(user2.hasOwnProperty());


const car = {
    wheels: 4,
    drive: function() {
        console.log("drive...");
    }
};

const bmw = {
    color: "red",
    navigation: 1
};

const audi = {
    color: "blue",
};

const benz = {
    color: "black",
};

const x5 = {
    color: "white",
    name: "x5"
}

// 자식객체.__proto__ = 부모객체;  로 상속받을 수 있다.
bmw.__proto__ = car;
audi.__proto__ = car;
benz.__proto__ = car;

x5.__proto__ = bmw;

console.log(bmw.wheels);
bmw.drive();

console.log(x5.color);
console.log(x5.wheels);
x5.drive();


// 객체의 property 순회 - for ... in => 상속된 프로퍼티도 모두 출력
for(p in x5) {
    console.log(p);
}

// hasOwnProperty() 를 사용할 수 있음.
for(p in x5) {
    if(x5.hasOwnProperty(p)) {
        console.log('o', p);
    }
}

// 아래의 경우는 상속된 property 는 출력하지 않는다.
console.log(Object.keys(x5));
console.log(Object.values(x5));



// 생성자 함수 활용
const Bmw = function(color) {
    this.color = color;
}

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("drive...");
}
Bmw.prototype.navigation = 1;

const x7 = new Bmw("white");
console.log(x7.wheels);
console.log(x7.navigation);
x7.drive();