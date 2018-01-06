import {Component} from "@angular/core";
import { Router } from '@angular/router';
import {LoginUser} from './login-user';
import {LoginService} from './login.service';

@Component({
    selector:'welcome',
    templateUrl: './welcome.component.html',
    providers:[LoginService]
}) 

export class WelcomeComponent{
    title:string="User Login";
    loading:boolean = false;
    user:LoginUser = new LoginUser();
    loginUser:LoginUser;
    loadingImg:string = '../../assets/loading.gif';
    errorMsg : string;

    constructor(private ls:LoginService){
    }
    isLogin():boolean{
        return sessionStorage.getItem('login')==='true';
    }
    getItem(param:string):string{
        return sessionStorage.getItem(param);
    }
    
    logout():void{
        sessionStorage.clear();
    }
    login():void {
        this.loading = true;
        console.log(this.user);
        this.ls.login(this.user)
        .subscribe(
            datas => {
                if(datas['error']){
                    alert(datas['error']);
                    return;
                }
                if(datas["list"]){

                    this.loginUser = datas["list"][0];
                    console.log(this.loginUser);
                    sessionStorage.setItem('userId', this.loginUser.userid);
                    sessionStorage.setItem('userPwd', this.loginUser.userpwd);
                    sessionStorage.setItem('userName', this.loginUser.username);
                    sessionStorage.setItem('userNo', this.loginUser.userno+'');
                    //sessionStorage.setItem('token', this.loginUser.token);
                    sessionStorage.setItem('login','true');
                    alert(this.loginUser.username + "님 환영합니다.")
                }

            },
            error =>  {
                this.errorMsg = <any>error;
                alert(this.errorMsg);
            },
            () =>{
                this.loading = false;
            }
        )
    }
}