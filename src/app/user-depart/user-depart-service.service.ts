import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserDepart } from './user-depart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserDepartServiceService {
  url : string = "http://localhost:3000/";
  diList:Array<UserDepart> = [];
  private headers = new Headers();

  constructor(protected _http:Http) {
    this.headers.append("Content-Type","application/json;charset=utf-8");
    this.headers.append("Accept","application/json;charset=utf-8");
  }

  // addDepart(di:Depart):Observable<any>{
  //   // this.diList.push(di);
  //   let url:string = "api/depart?name=test&diName=ditest";
  //   return this._http.get(this.url + url);
  // };

  // addDepartPost(di:Depart):Observable<any>{
  //   let url:string = "api/departs";
  //   return this._http.post(this.url + url, di);
  // };

  getUserDepartList():Observable<any>{
    let url:string = "api/userdeparts";
    return this._http.get(this.url + url);
  };

  // deleteDepart(di:Depart):Observable<any>{
  //   let url:string = "api/departs/" + di.diNo;
  //   return this._http.delete(this.url + url);
  // };  

  updateUserDepart(ud:UserDepart):Observable<any>{
    let url:string = "api/userdeparts/update";
    return this._http.post(this.url + url, ud);
  };

  deleteUserDepart(ud:UserDepart):Observable<any>{
    let url:string = "api/userdeparts/" + ud.userno;
    return this._http.delete(this.url + url);
  };

}
