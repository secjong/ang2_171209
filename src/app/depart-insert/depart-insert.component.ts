import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Depart } from '../depart/depart';
@Component({
  selector: 'app-depart-insert',
  templateUrl: './depart-insert.component.html',
  styleUrls: ['./depart-insert.component.css']
})
export class DepartInsertComponent implements OnInit {
  @Input() title:string;
  @Output() diVisible = new EventEmitter<boolean>();
  @Output() childeDi = new EventEmitter<Depart>();
  di:Depart
  constructor() {
    this.di = new Depart();
  }

  ngOnInit() {
  }

  addDepart():void{
    this.childeDi.emit(this.di);
    this.close();
  };

  close():void{
    this.diVisible.emit(false);
  }
}
