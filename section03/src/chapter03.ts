
/*
    객체 타입간의 호환성 
    구조적 타입 시스템 : 타입이 더 많으면 서브 타입 
*/

// 슈퍼 타입 // 
type Car = {
    name: string, 
    color: string
};

// 서브 타입 // 
type Sonata = {
    name: string, 
    color: string,
    brand: string
};

let car: Car = {
    name: "승용차",
    color: "black"
};

let sonata: Sonata = {
    name: "소나타",
    color: "black",
    brand: "현대"
};

car = sonata //업캐스팅 
// sonata = car //오류 (다운캐스팅) 