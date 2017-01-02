import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { FriendModel } from '../../models/friend.model';
import { UserService } from '../../services/user.service';
import { FriendService } from '../../services/friend.service';

@Component({
    moduleId: module.id,
    selector: 'message',
    templateUrl: 'message.html',
    styleUrls: ['message.css']
})

export class MessageComponent implements OnInit {

    user: UserModel;
    friends: FriendModel[];
    haveFriend: boolean;
    friend: UserModel;

    constructor(private userService: UserService, private friendService: FriendService) {}

    ngOnInit() {
        this.userService.getById(sessionStorage.getItem("id")).subscribe(//pego dados do usuario
            data => this.user = data,
            error => console.log(error)
        );
        this.friendService.getAll(sessionStorage.getItem("id")).subscribe(//pego dados dos seus amigos
            data => {
                this.friends = data;
                this.checkFriend();
            },
            error => console.log(error)
        );
    }

    checkFriend() {
        if(typeof this.friends !== 'undefined' && this.friends.length > 0) {
            this.haveFriend = true;
        } else {
            this.haveFriend = false;
        }
    }
}