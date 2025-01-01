
// 함수 타입 정의 
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 

function func(a: number,b: number): number {
    return a + b;
}

// 화살표 함수 
const add = (a:number, b:number): number => a + b;

// 함수의 매개변수 
function introduce(name = "Kim", age?: number) {
    console.log(`name: ${name}`);
    if(typeof age === 'number')
        console.log(`age: ${age + 10}`); 
}

introduce("Kim", 20); 
introduce("Lee"); 

function getSum(...rest: number[]) { 
    let sum = 0; 
    rest.forEach((it) => (sum += it)); 

    return sum; 
}

getSum(1, 2, 3); 
getSum(1, 2, 3, 4, 5);