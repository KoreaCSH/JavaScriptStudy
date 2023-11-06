// setTimeout - 일정 시간이 지난 후 함수를 실행
// setInterval - 일정 시간 간격으로 함수를 반복

function fn() {
    console.log(3);
}

// 3 초 뒤에 함수 fn 실행
setTimeout(fn, 3000);


// 함수에 인수가 필요한 경우
function showName(name) {
    console.log(name);
}

// 인수는 시간 뒤에 전달
setTimeout(showName, 3000, 'Mike');


// 3 초마다 showName 함수 반복
setInterval(showName, 3000, 'John');


let num = 0;

// 스케줄링 중단
function showtime() {
    console.log(`접속한 지 ${num++}초가 지났습니다.`);
    if(num > 5) {
        clearInterval(tId);
    }
}

const tId = setInterval(showtime, 1000);