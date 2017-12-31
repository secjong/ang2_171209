import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  visible:boolean;
  title:string = "컴포넌트 테스트";
  subTitle:string = "자식컴포넌트";
  constructor() {
    console.log("부모컴포넌트 생성자 호출");
  }

  ngOnInit() {
    console.log("부모컴포넌트 초기시 실행");
    this.visible = false;
  }
  
  ngDoCheck(){
    console.log("부모의 visible " + this.visible);
  };

  ngAfterViewInit(){
    console.log("부모 한번 실행");
  };

  ngAfterViewChecked(){
    console.log("부모 값 변화시 매번 실행");
  };

  chVisible(b:boolean){
    this.visible = b;
  };


}
