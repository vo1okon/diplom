import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  cal_visibility = "none";
  table_visibility = "table";

  table_on(){
    if(this.cal_visibility==="inline")
    {
      this.cal_visibility="none";
    }
    this.table_visibility = "table";
  }
  calen_on(){
    if(this.table_visibility==="table")
    {
      this.table_visibility="none";
    }
    this.cal_visibility = "inline";
    
  }
}
