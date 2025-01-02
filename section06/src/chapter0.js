
/*
    클래스 
*/

// Student 클래스 
class Student {
    //필드
    name
    grade 
    age

    //생성자 
    constructor(name, grade, age) {
        this.name = name
        this.grade = grade
        this.age = age
    }

    //메서드 
    study() {
        console.log("열심히 공부함")
    }

    introduce() {
        console.log(`안녕하세요, ${this.name}입니다.`)
    }
}

// 부모 클래스 상속 
class StudentDeveloper extends Student{
    //필드
    favoriteSkill

    //생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age)
        this.favoriteSkill = favoriteSkill
    }

    //메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`)
    }
}

let studentA = {
    name: "Kim",
    grade: "A",
    age: 30,
    study() {
        console.log("열심히 공부함")
    },
    introduce() {
        console.log(`안녕하세요, ${this.name}입니다.`)
    }
};

// Student 인스턴스 
let studentB = new Student("Lee", "C", 40);
studentB.study();
studentB.introduce();