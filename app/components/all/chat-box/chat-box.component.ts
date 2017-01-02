import { Component, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'chat-box',
    templateUrl: 'chat-box.html',
    styleUrls: ['chat-box.css']
})

export class ChatBoxComponent {

    @Input() friend: UserModel;
    @Input() user: UserModel;
    
    closeChat() {
        this.friend = undefined;
    }
}