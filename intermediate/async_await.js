// async, await
// function 앞에 async 를 붙이면 항상 Promise 를 반환한다.
async function getName() {
    return "Mike";
}

async function getError() {
    throw new Error("err..");
}

getName().then((res) => {
    console.log(res);
})

// getError().catch((rej) => {
//     console.log(rej);
// });

function getAge(age) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(age);
        }, 1000);
    });
}

// await 은 async function 내부에서만 사용할 수 있다.
// await 뒤에는 Promise 가 와야 한다.
async function showAge() {
    const result = await getAge(30);
    console.log(result);
}

showAge();


async function sayHello() {
    console.log("hello");
    const byeMsg = await sayBye();
    console.log(byeMsg);
    console.log("Hello again")
}

function sayBye() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("bye");
        }, 3000);
    });
}

sayHello();


// 자바스크립트는 여러 작업을 동시에 처리하기 위해 '비동기'라는 개념을 도입하여
// 특정 작업의 완료를 기다리지 않고 다른 작업을 동시에 수행할 수 있도록 하였다.
// 비동기를 알맞게 처리하기 위해 콜백함수 / Promise / async, await 을 활용할 수 있다.

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            //res("2번 주문 완료");
            rej("err");
        }, 3000);
    });
};

const f3 = (msg) => {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log("시작");
async function order() {
    // reject 을 저리하기 위해서는 try ... catch 문을 활용한다.
    try {
        // await Promise.all([]) 도 가능하다.
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    }
    catch(e) {
        console.log(e);
    }
    console.log("종료");
}
order();

