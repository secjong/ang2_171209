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

  parentVisible:boolean = false;
  updateVisible:boolean = false;
  subTitle:string = this.title + "입력";
  diNo:string = '';
  duDiNo:number;

  constructor(private dis:DepartService) {
    this.di = new Depart();
  }

  
  addDepart(di:Depart):void{
    this.dis.addDepartPost(di).subscribe(
      datas => {
        let result = datas.json(); 
        console.log(result);
        if(result.succeed == "ok"){
          alert("부서가 추가되었습니다.");
          this.showDepartList();
        }else{
          alert("부서추가가 실패했습니다.");
        }
      }
    );
  };

  showDepartList():void{
    this.dis.getDepartList(this.diNo).subscribe(
      datas=>{
        this.diList = (datas.json());
      }
    )
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

  openView(di:Depart):void{
    this.duDiNo = di.diNo;
    this.updateVisible = true;
  };

  deleteDi(di:Depart):void{
    // for(let i = 0; i < this.diList.length; i++){
    //   if(idx === this.diList[i].dino){
    //     //인덱스가 같은경우 지우기
    //     this.diList.splice(i,1);
    //   }
    // }
    // this.diList.splice(this.diList.indexOf(di), 1);
    
    this.dis.deleteDepart(di).subscribe(
      datas => {
        let result = datas.json(); 
        if(result.error){
          alert(result.error.msg);
          console.log(result.error);
        }else{
          alert("부서가 삭제되었습니다.");
          console.log("결과괎 : " , result);
          this.showDepartList();
        }
      }
    );    
  };



  toggleDepartInsert(v:boolean):void{
    this.parentVisible = v;
  };

  toggleDepartUpdate(v:boolean):void{
    this.updateVisible = v;
  };

  ngOnInit() {
  }

}
