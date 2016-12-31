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
var posts_service_1 = require("../../../services/posts.service");
var post_model_1 = require("../../../models/post.model");
var user_model_1 = require("../../../models/user.model");
var AddPostComponent = (function () {
    function AddPostComponent(postsService) {
        this.postsService = postsService;
        this.post = new post_model_1.PostModel();
    }
    AddPostComponent.prototype.dropImage = function (event) {
        event.preventDefault();
        this.post.img = event.dataTransfer.files[0];
        var dataURL = URL.createObjectURL(event.dataTransfer.files[0]);
        var output = this.imgUpload.nativeElement;
        output.src = dataURL;
    };
    AddPostComponent.prototype.imageFloating = function (event) {
        event.preventDefault();
        this.dropImageFloating = true;
    };
    AddPostComponent.prototype.postFeed = function (user) {
        this.post.id_user = user.id;
        this.post.img_user = user.img;
        this.post.first_name_user = user.first_name;
        this.post.description = this.description.nativeElement.innerText;
        this.postsService.setPost(this.post).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    return AddPostComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_model_1.UserModel)
], AddPostComponent.prototype, "user", void 0);
__decorate([
    core_1.ViewChild('imgUpload'),
    __metadata("design:type", Object)
], AddPostComponent.prototype, "imgUpload", void 0);
__decorate([
    core_1.ViewChild('description'),
    __metadata("design:type", Object)
], AddPostComponent.prototype, "description", void 0);
AddPostComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-post',
        templateUrl: 'add-post.html',
        styleUrls: ['add-post.css']
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], AddPostComponent);
exports.AddPostComponent = AddPostComponent;
//# sourceMappingURL=add-post.component.js.map