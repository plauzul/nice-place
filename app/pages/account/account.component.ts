import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { PostModel } from '../../models/post.model';
import { FriendModel } from '../../models/friend.model';
import { UserService } from '../../services/user.service';
import { PostsService } from '../../services/posts.service';
import { FriendService } from '../../services/friend.service';

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: 'account.html',
    styleUrls: ['account.css']
})

export class AccountComponent implements OnInit {

    user: UserModel;
    posts: PostModel[];
    friends: FriendModel[];
    havePost: boolean;
    haveFriend: boolean;
    friend: UserModel;

    constructor(private userService: UserService, private postsService: PostsService, private friendService: FriendService) {}

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
        this.postsService.getAllWithMyFriends(sessionStorage.getItem("id")).subscribe(//pego os posts do usuario e seus amigos
            data => {
                this.posts = data;
                this.checkPosts();
            },
            error => console.log(error)
        );
    }

    checkPosts() {
        if(typeof this.posts !== 'undefined' && this.posts.length > 0) {
            this.havePost = true;
        } else {
            this.havePost = false;
        }
    }

    checkFriend() {
        if(typeof this.friends !== 'undefined' && this.friends.length > 0) {
            this.haveFriend = true;
        } else {
            this.haveFriend = false;
        }
    }
}