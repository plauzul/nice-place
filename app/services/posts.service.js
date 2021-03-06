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
var PostsService = (function (_super) {
    __extends(PostsService, _super);
    function PostsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    PostsService.prototype.getAll = function () {
        return this.http.get(this.urlApi + "post")
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    PostsService.prototype.getAllWithMyFriends = function (id) {
        return this.http.get(this.urlApi + "post/" + id)
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    PostsService.prototype.setPost = function (post) {
        return this.http.post(this.urlApi + "post", this.jsonToQueryString(post))
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    return PostsService;
}(base_service_1.BaseService));
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map