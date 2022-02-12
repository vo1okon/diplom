import { Injectable } from "@angular/core";


export class UserService {

    @Injectable({providedIn: 'root'})

    constructor(private userSerevice: UserService) {}
    
    Users = [
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

}

