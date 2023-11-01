// 생성자 함수 - 보통 가장 앞 글자를 대문자로 작성한다
function User(name, age) {
    // this = {} - 실제 동작 방식
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    }
    // return this;
}

let user1 = new User("Mike", 20);
let user2 = new User("Can", 23);
let user3 = new User("Park", 26);

user3.showName();


function Item(title, price) {
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`);
    }
}

const item1 = new Item("인형", 3000);
const item2 = new Item("사과", 2000);
const item3 = new Item("지갑", 10000);

console.log(item1, item2, item3);

item1.showPrice();
item2.showPrice();
item3.showPrice();