export class User {
    userNo: number;
    userId: string;
    userName: string;
    userPwd: string;
    userAge: number;
    complete: boolean;
    token: string;
    constructor(values: Object = {}){
        //인자로 받은 객체를 User 인스턴스를 만들면서 복사해넣는 부분
        Object.assign(this, values);
    }
};