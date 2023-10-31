const superman = {
    name : 'clark', 
    age : 30
}

// . 과 [] 로 속성에 접근할 수 있다.
console.log(superman.name);
console.log(superman['age']);
console.log(superman);


// 속성 추가 - 마찬가지로 . 과 [] 로 추가할 수 있다.
superman.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman);


// 속성 삭제 - delete 활용
delete superman.age;
console.log(superman);


// 객체를 반환하는 함수
function makeObject(name, age) {
    return {
        name,   // 축약해서 사용 가능하다. 
        age, 
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);


// in 을 활용하여 속성이 있는지 확인
console.log("age" in Mike);
console.log("birthday" in Mike);


// 속성이 없는 경우를 대비해야 하므로 이 때 in 을 활용한다.
function isAdult(user) {
    if( !('age' in user) || user.age < 20) {
        return false;
    }
    return true;
}

const CSH = {
    name : "CSH",
    age : 25
}

const KKK = {
    name : "KKK"
}

console.log(isAdult(CSH));
console.log(isAdult(KKK));


// 객체 for ... in 예제
for(x in Mike) {
    console.log(Mike[x]);
}