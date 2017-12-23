import { Component, OnInit } from '@angular/core';
import { Depart } from './depart';
import { DepartService } from './depart.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css'],
  providers: [DepartService]
})
export class DepartComponent implements OnInit {
  title:string = "부서정보";
  di:Depart;
  isShow:boolean = false;
  btnstr:string = "테스트보기";
  diList:Array<Depart> = [];

  constructor(private dis:DepartService) {
    this.di = new Depart();
    // dis.getDepartList();
    console.log("나도 누군가 호출하겠지~");
  }

  
  addDepart():void{
    this.dis.addDepart(this.di);
    this.di = new Depart();
  };

  showDepartList():void{
    this.diList = this.dis.getDepartList();
  };

  changeShow():void{
    if(this.isShow){
      this.isShow = false;
      this.btnstr = "테스트보기";
    } else {
      this.isShow = true;
      this.btnstr = "테스트숨기기";
    }
  };

  deleteDi(di:Depart):void{
    console.log(di);
    // for(let i = 0; i < this.diList.length; i++){
    //   if(idx === this.diList[i].dino){
    //     //인덱스가 같은경우 지우기
    //     this.diList.splice(i,1);
    //   }
    // }
    ;
    this.diList.splice(this.diList.indexOf(di), 1);
  };

  ngOnInit() {
  }

}
