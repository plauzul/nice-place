import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { FriendModel } from '../../models/friend.model';
import { UserService } from '../../services/user.service';
import { FriendService } from '../../services/friend.service';

@Component({
    moduleId: module.id,
    selector: 'friends',
    templateUrl: 'friends.html',
    styleUrls: ['friends.css']
})

export class FriendsComponent implements OnInit {

    user: UserModel;
    friends: FriendModel[];
    haveFriend: boolean;
    search: string;
    allUsers: UserModel[];

    constructor(private userService: UserService, private friendService: FriendService) {}

    ngOnInit() {
        this.friendService.getAll(sessionStorage.getItem("id")).subscribe(//pego dados dos seus amigos
            data => {
                this.friends = data;
                this.checkFriend();
            },
            error => console.log(error)
        );
        this.userService.getById(sessionStorage.getItem("id")).subscribe(//pego dados do usuario
            data => this.user = data,
            error => console.log(error)
        );
        this.userService.getAll().subscribe(//pego dados de todos os usuarios
            data => this.allUsers = data,
            error => console.log(error)
        )
    }

    checkFriend() {
        if(typeof this.friends !== 'undefined' && this.friends.length > 0) {
            this.haveFriend = true;
        } else {
            this.haveFriend = false;
        }
    }
}