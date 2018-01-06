import { Component } from '@angular/core';
import { User } from './user/user';
import { CommonServiceService } from './common/common-service.service';
import { RouterLink } from './router-link'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  mlist:Array<RouterLink> = [];
  user:User;

  //컴포넌트에서 사용할 User 배열
  userList : Array<User> = []; //제너릭

  constructor(private css:CommonServiceService){
    this.user = new User();
    this.user.userId = "test";
    this.user.userName = "테스틋";
    sessionStorage.setItem("user", JSON.stringify(this.user));

    let url = "http://localhost:3000/api/menus";
    this.css.getJson(url).subscribe(
      res=>{
        console.log(res);
        this.mlist = res.list;
      }
    )

  };

  addUser() : void {
    var user : User = new User();
    user.userName = this.user.userName;
    user.userAge = this.user.userAge;
    this.userList.push(user);
  };

  test() : void {
    var user1 : User = new User();
    this.userList.push(user1);
    //자기에 속한 속성을 바꿀 때는 링크가 유지된다.
    user1.userName = "testname";
    user1.userAge = 22;

    //자기자신을 바꾸었을 때는 기존의 링크가 끊긴다. 하지만 이미 외부에 삽입한 애는 생명연장됨.
    user1 = new User();
    this.userList.push(user1);
    user1.userName = "testname2";
    user1.userAge = 222;
  };
}
