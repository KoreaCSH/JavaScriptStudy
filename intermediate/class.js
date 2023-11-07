// Class
// 객체를 생성하기 위해서는 생성자 함수를 사용할 수 있다.
// ES6 부터는 Class 도 사용할 수 있다.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 생성자 함수와 다른 점은 메서드는 prototype 에 저장된다는 점
    showName() {
        console.log(this.name);
    }
}

// 생성자 함수 앞에 new 를 붙이지 않으면 undefined 로 정의되지만, 
// Class 로 인스턴스 생성할 때 new 를 붙이지 않으면 Error 가 발생한다.
const tom = new User('tom', 20);

console.log(tom);

// Class 에서는 상속된 property 출력하지 않는다.
for(p in tom) {
    console.log(p);
}


// Class 에서의 상속
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive...");
    }
    stop() {
        console.log("STOP");
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
    // overriding 의 원리는 Java 와 유사한 듯
    stop() {
        super.stop();
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");
z4.drive();
z4.stop();
console.log(z4.color);
console.log(z4.navigation);