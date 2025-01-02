
/*
    함수 오버로딩
*/

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number): void;

// 구현부 -> 구현 시그니처
// ?. (옵셔널 체이닝) : 값이 null 또는 undefined이면 undefined를 반환  
function func(a: number, b?: number) {
    if(typeof b === 'number') 
        console.log(a + b); 
    else  
        console.log(a); 
}; 