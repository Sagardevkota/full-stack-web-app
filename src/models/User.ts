
export class User {
    userName:string;
    password:string;
    address:string;
    active:boolean;
    age:number;

    constructor(UserResponse:any){
        this.userName = UserResponse.userName;
        this.password = UserResponse.password;
        this.address = UserResponse.address;
        this.active = UserResponse.active;
        this.age = UserResponse.number;
    }

}