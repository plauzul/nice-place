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
var friend_service_1 = require("../../services/friend.service");
var FriendsComponent = (function () {
    function FriendsComponent(userService, friendService) {
        this.userService = userService;
        this.friendService = friendService;
    }
    FriendsComponent.prototype.ngOnInit = function () {
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
        this.userService.getAll().subscribe(//pego dados de todos os usuarios
        function (//pego dados de todos os usuarios
            data) { return _this.allUsers = data; }, function (error) { return console.log(error); });
    };
    FriendsComponent.prototype.checkFriend = function () {
        if (typeof this.friends !== 'undefined' && this.friends.length > 0) {
            this.haveFriend = true;
        }
        else {
            this.haveFriend = false;
        }
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'friends',
        templateUrl: 'friends.html',
        styleUrls: ['friends.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, friend_service_1.FriendService])
], FriendsComponent);
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=friends.component.js.map