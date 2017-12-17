import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { User } from './user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserDataService]
})
export class UserComponent implements OnInit {
  userList: Array<User> = []; //제너릭으로, 배열의 원소가 User로 이루어진 경우 이렇게 선언
  searchUser: User = new User();
  errorMsg: string = '';
  addUserObj: User = new User();

  constructor(private uds: UserDataService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(): void{
    //uds의 getUsers는 Observable를 반환하는데, 이를 구독하고 있다가 반환되면 작업 수행
    this.uds.getUsers(this.searchUser).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error => {
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      }
    );
  };

  addUser(): void{
    console.log(this.addUserObj);
    this.uds.addUser(this.addUserObj);
  };

  

}
