import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
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
    @Output() chatUpdate = new EventEmitter();
    search: string;

    addChatBox(friend: FriendModel) {
        this.chatUpdate.emit(friend);
    }
}