import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    //사용할 모든 컴포넌트를 등록하는 곳
    AppComponent,
    UserComponent
  ],
  imports: [
    //사용할 컴포넌트들에서 임포트 안해도 사용할 수 있게 모듈 등록하는 곳
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"user",
        component:UserComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
