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
var NotificationsComponent = (function () {
    function NotificationsComponent(userService, friendService) {
        this.userService = userService;
        this.friendService = friendService;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getById(sessionStorage.getItem("id")).subscribe(//pego dados do usuario
        function (//pego dados do usuario
            data) { return _this.user = data; }, function (error) { return console.log(error); });
        this.friendService.getAll(sessionStorage.getItem("id")).subscribe(//pego dados dos seus amigos
        function (//pego dados dos seus amigos
            data) {
            _this.friends = data;
            _this.checkFriend();
        }, function (error) { return console.log(error); });
    };
    NotificationsComponent.prototype.checkFriend = function () {
        if (typeof this.friends !== 'undefined' && this.friends.length > 0) {
            this.haveFriend = true;
        }
        else {
            this.haveFriend = false;
        }
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'notifications',
        templateUrl: 'notifications.html',
        styleUrls: ['notifications.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, friend_service_1.FriendService])
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map