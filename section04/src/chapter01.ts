
// 함수 타입 표현식 
type Operation = (a:number, b: number) => number;

const add = (a: number, b: number) => a + b;

const mul: (a: number, b: number) => number = (a, b) => a * b;

const sub: Operation = (a, b) => a - b;

// 호출 시그니쳐 (콜 시그니쳐)
type Operation2 = {
    (a: number, b: number): number;
}

const divide: Operation2 = (a, b) => a / b;