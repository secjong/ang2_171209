import { Component, OnInit } from '@angular/core';
import { UserDepart } from './user-depart';
import { UserDepartServiceService } from './user-depart-service.service';
import { Depart } from '../depart/depart';
import { DepartService } from '../depart/depart.service'; 

@Component({
  selector: 'app-user-depart',
  templateUrl: './user-depart.component.html',
  styleUrls: ['./user-depart.component.css'],
  providers: [UserDepartServiceService, DepartService]
})
export class UserDepartComponent implements OnInit {
  udi:UserDepart;
  udList:Array<UserDepart> = [];
  diList:Array<Depart> = [];
  
  constructor(private uds:UserDepartServiceService, private ds:DepartService) {
    this.udi = new UserDepart();
  }

  ngOnInit() {
    this.ds.getDepartList("").subscribe(
      res=>{
        this.diList = res.json();
      }
    )
  }

  getUseDepartList():void{
    this.uds.getUserDepartList().subscribe(
      datas=>{
        this.udList = (datas.json());
      }
    )
  };

  editUserDepart(ud:UserDepart):void{
    //수정하기
    this.uds.updateUserDepart(ud).subscribe(
      datas=>{
        let res = datas.json();
        if(res.succeed == "ok"){
          alert("수정에 성공했습니다.");
          this.getUseDepartList();
        } else {
          alert("수정에 실패했습니다.");
        }
      }
    )
  };

  deleteUserDepart(ud:UserDepart):void{
    //삭제하기
    this.uds.deleteUserDepart(ud).subscribe(
      datas=>{
       let res = datas.json();
       if(res.affectedRows == 1){
         alert("삭제에 성공");
         this.getUseDepartList();
       } else {
         alert("삭제 실패");
       }
      }
    )
  };
}
