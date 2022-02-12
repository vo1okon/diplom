import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memmos',
  templateUrl: './memmos.component.html',
  styleUrls: ['./memmos.component.css']
})
export class MemmosComponent implements OnInit {

  constructor() { }
  outfit = 'none';
  documents = 'none';
  food = 'none';

  change_outfit(){
    this.outfit = 'grid';
    this.documents = 'none';
    this.food = 'none';
  }
  change_doc(){
    this.outfit = 'none';
    this.documents = 'grid';
    this.food = 'none';
  }
  change_food(){
    this.outfit = 'none';
    this.documents = 'none';
    this.food = 'grid';
  }

  ngOnInit(): void {
  }
 

}
