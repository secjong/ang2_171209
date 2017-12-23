import { Injectable } from '@angular/core';
import { Depart } from './depart';

@Injectable()
export class DepartService {
  diList:Array<Depart> = [];
  constructor() {
    console.log("누군가는 부서 생성자를 호출합니다.");
  }

  addDepart(di:Depart):void{
    this.diList.push(di);
  };

  getDepartList():Array<Depart>{
    return this.diList;
  };
}
