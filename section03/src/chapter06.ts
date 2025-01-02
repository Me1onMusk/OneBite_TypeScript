
/*
    타입 단언
*/

type Person = {
    name: string,
    age: number
};


// let person: Person = {};
let person = {} as Person;  //Person으로 간주

person.name = "Kim";
person.age = 30;

type Car = {
    name: string,
    color: string
}

let car = { 
    name: "Niro",
    color: "Black",
    brand: "Kia"
} as Car; 

/*
    타입 단언의 규칙 
    값 as 단언 
    A as B 
    A가 B의 슈퍼타입이거나
    A가 B의 서브타입이어야 함
*/

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string; 
// let num3 = 10 as string;  //오류

/*
    const 단언
*/

let cat = {
    name: "야옹이",
    color: "Black"
} as const;

/*
    Not Null 단언
    ?. (옵셔널 체이닝) : undefined 또는 null인 경우 에러를 발생시키지 않고 undefined를 반환
*/

type Post = {
    title: string,
    author?: string 
};

let post: Post = {
    title: "게시글1",
    author: "Kim"
};

const len: number = post.author!.length;  //null 또는 undefined이 아님을 개발자가 단언 