
/*
    인터페이스 확장 = 상속 
*/

// 부모
interface Animal {
    name: string,
    color: string
};

// 부모 상속
interface Dog extends Animal {
    isBark: boolean
};

interface Cat extends Animal{
    isScratch: boolean
};

interface Chicken extends Animal{
    isFly: boolean
};

// 다중 확장 // 
interface DogCat extends Dog, Cat {  }

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: false
};

const dog: Dog = {
    name: "",
    color: "",
    isBark: true
};