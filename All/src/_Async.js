
/* ------------------------------------------------- */ 
// 비동기 // 
console.log(1);

// 3초 후에 2 출력 
// Web APIs에 넣어 놓음 
setTimeout(() => {
    console.log(2);
},3000);   

console.log(3); 

/* ------------------------------------------------- */ 
// 콜백 함수 // 
function task(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
};

task(1, 2, (value) => {
    console.log(value);
});

function orderFood(callback) {
    setTimeout(() => {
        const food = '피자';
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000);
};

function freezeFood(cooldownFood, callback) {
    setTimeout(() => {
        const freezeFood = `얼은 ${cooldownFood}`;
        callback(freezeFood);
    }, 1500);
};

orderFood((food) => {
    console.log(food)

    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownFood);

        freezeFood(cooldownFood, (freezeFood) => {
            console.log(freezeFood);
        });
    });
});

/* ------------------------------------------------- */ 
// Promise (중요) // 
// pending (대기) -> resolved (해결) -> fulfilled (성공) 
// pending (대기) -> rejected (거부) -> rejected (실패) 

function Add(num) {
    const promise = new Promise((resolve, reject) => {
        //비동기 작업 
        //executor 
        setTimeout(() => {
            if (typeof num === 'number') 
                resolve(num + 10);
            else 
                reject('num은 숫자가 아닙니다');
        }, 2000);
    }); 

    return promise;
}

Add(0)
    .then((result) => {
        console.log(result);

        return Add(result);
    }).then((result) => {
        console.log(result);
        
        return Add(result);
    }).then((result) => {
        console.log(result);

    }).catch((error) => {
        console.log(error);

    });