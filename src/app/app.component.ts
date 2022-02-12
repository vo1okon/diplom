import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-visit';

  news = 'white';
  calendar = 'black';
  memmos = 'black';
  about = 'black';
  contacts = "black";

  n_on(){
    this.news = 'white';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'black';
  }
  c_on(){
    this.news = 'black';
    this.calendar = 'white';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'black';
  }
  m_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'white';
    this.about = 'black';
    this.contacts = 'black';
  }
  a_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'white';
    this.contacts = 'black';
  }
  con_on(){
    this.news = 'black';
    this.calendar = 'black';
    this.memmos = 'black';
    this.about = 'black';
    this.contacts = 'white';
  }
}
