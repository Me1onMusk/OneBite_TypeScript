
/*
    선언 합침
*/

interface Person {
    name: string
};

interface Person {
    age: number
};

interface Developer extends Person {
    name: "Dev"
};

const person: Person = {
    name: "Kim",
    age: 30
};

/*
    모듈 보강
*/

// 기존 인터페이스 
interface Lib {
    a: number, 
    b: number
};

// 추가 인터페이스 (모듈 보강)
interface Lib {
    c: string
};

const lib: Lib = {
    a: 1,
    b: 2,
    c: "Hello"
};