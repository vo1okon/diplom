import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})



export class UserService {

    private Users = [
        {
            name:'Max',
            age: 14,
            rank: 'Gvard'
        },
        
        {
            name:'Max',
            age: 14,
            rank: 'Gvard'
        }
    ]


    getUsers(){
        return this.Users;
    }
    // addData(name: string){
    //     this.Users.push(name);
    // }


}

