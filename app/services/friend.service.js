"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require("@angular/http");
var base_service_1 = require("./base.service");
var FriendService = (function (_super) {
    __extends(FriendService, _super);
    function FriendService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    FriendService.prototype.getAll = function (id) {
        return this.http.get(this.urlApi + "friend/" + id)
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    FriendService.prototype.addFriend = function (id_user, id_friend) {
        return this.http.post(this.urlApi + "friend?", this.jsonToQueryString({ id_user: id_user, id_friend: id_friend, situation: 'P' }), this.addHeadersForApi())
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    return FriendService;
}(base_service_1.BaseService));
FriendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FriendService);
exports.FriendService = FriendService;
//# sourceMappingURL=friend.service.js.map