import { Component, Input, ViewChild } from '@angular/core';
import { FriendModel } from '../../../models/friend.model';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.html',
    styleUrls: ['chat.css']
})

export class ChatComponent {

    @Input() friends: FriendModel[];
    @Input() haveFriend: boolean;
    search: string;

    addChatBox(friend: FriendModel) {
        console.log(friend);
    }
}