
// 객체 리터럴 
// 구조적 타입 시스템 
let user: {
    id?: number,
    name: string
} = {
    id: 1,
    name: "Kim"
}

user.id;

let config : {
    readonly apiKey: string;
} = {
    apiKey : "My Key"
}

config.apiKey;