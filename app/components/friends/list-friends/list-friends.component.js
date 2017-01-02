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
var user_model_1 = require("../../../models/user.model");
var friend_service_1 = require("../../../services/friend.service");
var ListFriendsComponent = (function () {
    function ListFriendsComponent(friendService) {
        this.friendService = friendService;
        this.myFriends = true;
    }
    ListFriendsComponent.prototype.getInfoUser = function (allUser) {
        this.otherUser = allUser;
    };
    ListFriendsComponent.prototype.addFriend = function (otherUser) {
        var _this = this;
        this.friendService.addFriend(this.user.id, otherUser.id).subscribe(function (data) { return _this.updateFriendsView(); }, function (error) { return console.log(error); });
    };
    ListFriendsComponent.prototype.updateFriendsView = function () {
        var _this = this;
        this.friendService.getAll(sessionStorage.getItem("id")).subscribe(function (data) { return _this.friends = data; }, function (error) { return console.log(error); });
    };
    return ListFriendsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListFriendsComponent.prototype, "friends", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListFriendsComponent.prototype, "allUsers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", user_model_1.UserModel)
], ListFriendsComponent.prototype, "user", void 0);
ListFriendsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list-friends',
        templateUrl: 'list-friends.html',
        styleUrls: ['list-friends.css']
    }),
    __metadata("design:paramtypes", [friend_service_1.FriendService])
], ListFriendsComponent);
exports.ListFriendsComponent = ListFriendsComponent;
//# sourceMappingURL=list-friends.component.js.map