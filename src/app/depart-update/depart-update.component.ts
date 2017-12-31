import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Depart } from '../depart/depart';
import { DepartUpdateService } from './depart-update.service';
//import { EventEmitter } from 'selenium-webdriver';
@Component({
  selector: 'app-depart-update',
  templateUrl: './depart-update.component.html',
  styleUrls: ['./depart-update.component.css'],
  providers: [DepartUpdateService]
})
export class DepartUpdateComponent implements OnInit {
  @Input() duDiNo:number;
  @Output() duVisible = new EventEmitter<boolean>();
  @Output() duCase = new EventEmitter<string>();
  
  di:Depart = new Depart();

  constructor(private dus:DepartUpdateService) {
  }

  ngOnInit() {
    alert(this.duDiNo);
    this.dus.getDepart(this.duDiNo).subscribe(
      res => {
        console.log(res.json());
        this.di = res.json()[0];
      }
    );
  }

  close():void{
    alert(this.duDiNo);
    this.duVisible.emit(false);
  };

  updateDepart():void{
    this.dus.updateDepart(this.di).subscribe(
      res=>{
        console.log(res.json());
        if(res.json().succeed == "ok"){
          alert("수정에 성공했습니다.");
          this.duCase.emit("reload");
          this.close();
        } else {
          alert("수정에 실패했습니다.");
        }
      }
    )
  };

}
