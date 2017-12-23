import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { DepartComponent } from './depart/depart.component';


@NgModule({
  //사용할 컴포넌트들이 등록되는 곳
  declarations: [
    AppComponent,
    TestComponent,
    UserComponent,
    DepartComponent
  ],
  //사용할 컴포넌트들에서 임포트 안해도 사용할 수 있게 모듈 등록하는 곳
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"user",
        component:UserComponent
      },
      {
        path:"test",
        component:TestComponent
      },
      {
        path:"depart",
        component:DepartComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
