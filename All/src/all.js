
/* ------------------------------------------------- */ 
// 자료형 // 

    // 1. Number Type
    let num2 = Infinity; 
    let num3 = -Infinity; 
    let num4 = NaN;  //연산 실패 

    // 2. Null Type (아무것도 없음) 
    let empty = null;  

    // 3. Undefined Type 
    let none; 

/* ------------------------------------------------- */ 
// 형 변환 // 
// 묵시적 형 변환 (암묵적)
// 명시적 형 변환 

    // 묵시적 형 변환
    let num = 10;
    let str = '20';
    const result = num + str;  //숫자 + 문자열 = 문자열 1020

    // 명시적 형 변환 
    let str1 = '10';
    let strToNum1 = Number(str1);  //숫자로 형 변환

    let str2 = '10개'; 
    let strToNum2 = parseInt(str2);  //10 

/* ------------------------------------------------- */ 
// 연산자 // 

    // 1. null 병합 연산자 
    let var1;
    let var2 = 10;
    let var3 = 20;

    let var4 = var1 ?? var2;  // undefined && 10 = 10 
    let var5 = var2 ?? var3;  // 10 

    let userName = "Kim";
    let userNickName = "ABC";

    let displayName = userName ?? userNickName; 

    // 2. typeof 연산자 
    let var7 = 1;
    var7 = 'hello';

    let t1 = var7;
    console.log(t1);

    // 3. 삼항 연산자 
    let res = var8 % 2 === 0 ? "짝수" : "홀수"; 

    // 4. 증감 연산자 
    let num1 = 1;
    ++num1;  //전위 연산 (현재 라인에서 실행) -> 2 
    num1++;  //후위 연산 (다음 라인에서 실행) -> 1 

/* ------------------------------------------------- */ 
// 객체 // 
const studentA = {
    name: "Kim",
    age: 20,
    say() {
        console.log("안녕");
    }
};

const studentB = {
    name: "Lee",
    age: 25
};

studentA.grade = 'A';  //추가
studentA.age = 30;     //수정
delete studentA.grade; //삭제 

studentA.say();  
studentA['say']();

const studentArr = [studentA, studentB];

/* ------------------------------------------------- */ 
// 함수 // 
// 호이스팅 : 끌어 올리다 

hello(); 

function hello() {
    console.log('Hello');
}

/* ------------------------------------------------- */ 
// 조건문 // 

/* ------------------------------------------------- */ 
// 반복문 // 

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

/* ------------------------------------------------- */ 
// Async 
// 어떤 함수를 비동기 함수로 만들어주는 키워드 
// 함수가 Promise를 반환하도록 변환해주는 그런 키워드 

// Await
// async 함수 내부에서만 사용이 가능 한 키워드 
// 비동기 함수가 다 처리 되기를 기다리는 역할 

async function getData() {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: "Kim",
                    id: "abc"
                })
            },1500)
        })
    )
};

async function printData() {
    const data = await getData();
    console.log(data);
};

/* ------------------------------------------------- */ 

    // 배열의 구조분해 할당 
    let arr = [1, 2, 3]; 
    let [one, two, three, four = 4] = arr; 

    // 객체의 구조분해 할당 
    let person = {
        name: "Kim",
        age: 30,
        hobby: "테니스"
    }; 

    let {name, age: myAge, hobby, extra = 'hello'} = person;  
    console.log(name, myAge, hobby, extra); 

    const func = ({name, age, hobby, extra}) => { 
        console.log(name, age, hobby, extra); 
    };
    func(person);

    // Spread 연산자 
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6];

    let obj1 = {
        a: 1,
        b: 2
    };

    let obj2 = {
        ...obj1,
        c: 3,
        d: 4
    };

    // Rest 매개변수 
    function funcB (one, ...rest) {
        console.log(rest);
    };

    funcB(...arr1);