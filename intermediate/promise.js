// Promise 예제
// 성공하면 resolve , 실패하면 reject

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("OK");
        reject(new Error("err..."));
    }, 1500);
});

console.log("시작");
pr.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("끝");
    });


// callback Hell 예시
const f1 = function(callback) {
    setTimeout(function() {
        console.log("콜백 1번 주문 완료");
        callback();
    }, 1500);
}

const f2 = function(callback) {
    setTimeout(function() {
        console.log("콜백 2번 주문 완료");
        callback();
    }, 5000);
}

const f3 = function(callback) {
    setTimeout(function() {
        console.log("콜백 3번 주문 완료");
        callback();
    }, 1500);
}

console.log("콜백 시작");
f1(function() {
    f2(function() {
        f3(function() {
            console.log("끝");
        });
    });
});


// Promise 를 통해 callback Hell 에서 탈출할 수 있다.
const f4 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f5 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};

const f6 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// Promise chaining
console.log("Promise 예제 시작");
f4()
    .then((res) => f5(res))
    .then((res) => f6(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log("끝");
    });

// 단, 위의 작업은 순차적으로 실행되기 때문에 총 6초가 소요된다.
// Promise.all 은 모든 작업 동시에 시작한다.
// 그러므로 아래의 작업은 3초 만에 종료된다.
console.time("Promise.all 소요시간")
Promise.all([f4(), f5(), f6()]).then((res) => {
    console.log(res);
    console.timeEnd("Promise.all 소요시간");
});


// Promise.race() 는 하나라도 종료되면 바로 결과를 반환한다.
// 단, 종료된 결과만!