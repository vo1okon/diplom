import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService){}

  items = [{}];
  name:string = " ";

//   addItem(name: string){
//     this.userService.addData(name);
// }

  ngOnInit(){
    this.items = this.userService.getUsers();
  }
  
  

}
