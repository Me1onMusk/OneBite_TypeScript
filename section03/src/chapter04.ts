
/*
    대수 타입
*/

/*
     합집합 - Union 타입
*/
let a : string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
    name: string,
    color: string
};

type Person = {
    name: string,
    language: string
}

type Union1 = Dog | Person

let union1: Union1 = {
    name: "",
    color: ""
};

let union2: Union1 = {
    name: "",
    language: ""
}; 

let union3: Union1 = {
    name: "",
    color: "",
    language: ""
}; 

// 오류 
// let union4: Union1 = {
//     name: ""
// };

/*
    교집합 - Intersection 타입
*/ 

type Intersection = Dog & Person; 
let intersection1: Intersection = {
    name: "",
    color:"",
    language: ""
}