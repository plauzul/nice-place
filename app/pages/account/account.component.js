"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service");
var posts_service_1 = require("../../services/posts.service");
var friend_service_1 = require("../../services/friend.service");
var AccountComponent = (function () {
    function AccountComponent(userService, postsService, friendService) {
        this.userService = userService;
        this.postsService = postsService;
        this.friendService = friendService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getAll(sessionStorage.getItem("id")).subscribe(//pego dados dos seus amigos
        function (//pego dados dos seus amigos
            data) {
            _this.friends = data;
            _this.checkFriend();
        }, function (error) { return console.log(error); });
        this.userService.getById(sessionStorage.getItem("id")).subscribe(//pego dados do usuario
        function (//pego dados do usuario
            data) { return _this.user = data; }, function (error) { return console.log(error); });
        this.postsService.getAllWithMyFriends(sessionStorage.getItem("id")).subscribe(//pego os posts do usuario e seus amigos
        function (//pego os posts do usuario e seus amigos
            data) {
            _this.posts = data;
            _this.checkPosts();
        }, function (error) { return console.log(error); });
    };
    AccountComponent.prototype.checkPosts = function () {
        if (typeof this.posts !== 'undefined' && this.posts.length > 0) {
            this.havePost = true;
        }
        else {
            this.havePost = false;
        }
    };
    AccountComponent.prototype.checkFriend = function () {
        if (typeof this.friends !== 'undefined' && this.friends.length > 0) {
            this.haveFriend = true;
        }
        else {
            this.haveFriend = false;
        }
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'account',
        templateUrl: 'account.html',
        styleUrls: ['account.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, posts_service_1.PostsService, friend_service_1.FriendService])
], AccountComponent);
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map