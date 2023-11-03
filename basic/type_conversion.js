// String 을 이어 붙이면 "9080" 이 되고, 연산자를 만나면 자동으로 숫자형으로 변환한다.
const mathScore = "90";
const engScore = "80";

const average = (mathScore + engScore) / 2;
console.log(average);

// String 으로 형 변환 - String() 활용
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

console.log(typeof String(true));


// Number 으로 형 변환 - Number() 활용
console.log(Number("341"));
console.log(Number("341asdf")); // 문자를 넣으면 NaN 반환
console.log(Number(true)); // 1
console.log(Number(false)); // 0


// Boolean 으로 형 변환 - Boolean()
// 아래의 값은 모두 false 반환
console.log(
    Boolean(0), 
    Boolean(null), 
    Boolean(undefined), 
    Boolean(NaN), 
    Boolean("")
)

