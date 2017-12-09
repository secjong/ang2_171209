import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  //컴포넌트에서 사용할 User 배열
  userList : Array<User> = []; //제너릭
  user : User = new User();
  userName : string = "";
  userAge : number = null;

  constructor(){
    
  };

  addUser() : void {
    var user : User = new User();
    user.userName = this.userName;
    user.userAge = this.userAge;
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
