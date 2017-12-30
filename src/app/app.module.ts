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
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartInsertComponent } from './depart-insert/depart-insert.component';
import { FuncTestComponent } from './func-test/func-test.component';
import { PromiseComponent } from './promise/promise.component';
import { DepartUpdateComponent } from './depart-update/depart-update.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
    DepartComponent,
    UserComponent,
    DepartInsertComponent,
    FuncTestComponent,
    PromiseComponent,
    DepartUpdateComponent
  ],
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
      },
      {
        path:"",
        component:WelcomeComponent
      },
      {
        path:"functest",
        component:FuncTestComponent
      },
      {
        path:"promise",
        component:PromiseComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//d 사용할 컴포넌트들이 등록되는 곳
//i 사용할 컴포넌트들에서 임포트 안해도 사용할 수 있게 모듈 등록하는 곳