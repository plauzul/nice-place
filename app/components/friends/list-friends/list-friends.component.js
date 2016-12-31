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
var ListFriendsComponent = (function () {
    function ListFriendsComponent() {
        this.myFriends = true;
    }
    ListFriendsComponent.prototype.getInfoUser = function (allUser) {
        this.user = allUser;
    };
    ListFriendsComponent.prototype.addFriend = function (user) {
        console.log(user);
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
ListFriendsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list-friends',
        templateUrl: 'list-friends.html',
        styleUrls: ['list-friends.css']
    }),
    __metadata("design:paramtypes", [])
], ListFriendsComponent);
exports.ListFriendsComponent = ListFriendsComponent;
//# sourceMappingURL=list-friends.component.js.map