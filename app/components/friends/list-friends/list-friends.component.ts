import { Component, Input } from '@angular/core';
import { FriendModel } from '../../../models/friend.model';
import { UserModel } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'list-friends',
    templateUrl: 'list-friends.html',
    styleUrls: ['list-friends.css']
})

export class ListFriendsComponent {

    @Input() friends: FriendModel[];
    @Input() allUsers: UserModel[];
    user: UserModel;
    search: string;
    myFriends: boolean = true;
    searchFriends: boolean;
    pendente: boolean;

    getInfoUser(allUser: UserModel) {
        this.user = allUser;
    }

    addFriend(user: UserModel) {
        console.log(user);
    }
}