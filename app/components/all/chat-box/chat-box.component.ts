import { Component, Input, ViewChild } from '@angular/core';
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
    @ViewChild('message') message;
    messages: string[] = [];
    minChatBox: boolean;
    
    closeChat() {
        this.friend = undefined;
    }

    sendMessage(event: any) {
        if(event.keyCode == 13) {
            this.messages.reverse();
            this.messages.push(this.message.nativeElement.innerText);
            this.messages.reverse();
            this.message.nativeElement.innerText = "";
        }
    }
}