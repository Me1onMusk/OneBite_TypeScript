
// any (모든 타입)
// 어떤 타입이든 될 수 있는 타입을 의미
// 타입 체크를 하지 않고 모든 값을 허용

// undefined (값이 정의되지 않음)
// 변수 선언만 하고 값을 할당하지 않은 상태 

// null (의도적으로 비어 있는 값)
// 의도적으로 값이 비어 있음을 명시

// void (반환값이 없는 함수)
// 리턴이 없을 때 사용
function func1(): string {
    return "Hello";
};

function func2() : void {
    console.log("Hello");
}

// never (절대 발생하지 않는 값)
// 어떤 값도 할당할 수 없음
function func3() : never{
    while (true) {}
}; 