
/*
    서로소 유니온 타입 
        교집합이 없는 타입들로만 만든 유니온 타입을 말함 
*/

import { error } from "console";

type Admin = {
    tag: "ADMIN",
    name: string,
    kickCount: number
};

type Member = {
    tag: "MEMBER",
    name: string,
    point: number
};

type Guest = {
    tag: "GUEST"
    name: string,
    visitCount: number
};

type User = Admin | Member | Guest;

function Login(user: User) {
    switch(user.tag) {
        case "ADMIN": 
            console.log(`${user.name}님 현재까지 ${user.kickCount}명을 강퇴했습니다.`);
            break;
        case "MEMBER": 
            console.log(`${user.name}님 현재까지 ${user.point}점을 모았습니다.`);
            break;
        case "GUEST": 
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
            break;
    };
};

/*
    비동기 작업의 결과를 처리하는 객체 
*/

type LoadingTask = {
    state: "Loading"
};

type FailedTask = {
    state: "Failed",
    error: {
        message: string
    };
};

type SuccessTask = {
    state: "Success",
    response: {
        data: string
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const loading: AsyncTask = {
    state: "Loading"
};

const failed: AsyncTask = {
    state: "Failed",
    error: {
        message: "실패"
    }
};

const success: AsyncTask = {
    state: "Success",
    response: {
        data: "데이터"
    }
};

function processResult (task: AsyncTask) {
    switch(task.state) {
        case "Loading":
            console.log("로딩중...");
            break;
        case "Failed":
            console.log(`에러발생: ${task.error.message}`);
            break;
        case "Success":
            console.log(`성공: ${task.response.data}`);
            break;
    };
};