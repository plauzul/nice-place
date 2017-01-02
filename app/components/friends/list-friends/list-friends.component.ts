import { Component, Input } from '@angular/core';
import { FriendModel } from '../../../models/friend.model';
import { UserModel } from '../../../models/user.model';
import { FriendService } from '../../../services/friend.service';

@Component({
    moduleId: module.id,
    selector: 'list-friends',
    templateUrl: 'list-friends.html',
    styleUrls: ['list-friends.css']
})

export class ListFriendsComponent {

    @Input() friends: FriendModel[];
    @Input() allUsers: UserModel[];
    @Input() user: UserModel;
    otherUser: UserModel;
    search: string;
    myFriends: boolean = true;
    searchFriends: boolean;
    pendente: boolean;

    constructor(private friendService: FriendService) {}

    getInfoUser(allUser: UserModel) {
        this.otherUser = allUser;
    }

    addFriend(otherUser: UserModel) {
        this.friendService.addFriend(this.user.id, otherUser.id).subscribe(
            data => this.updateFriendsView(),
            error => console.log(error)
        );
    }

    updateFriendsView() {
        this.friendService.getAll(sessionStorage.getItem("id")).subscribe(
            data => this.friends = data,
            error => console.log(error)
        );
    }
}