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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var user_model_1 = require("../../models/user.model");
var authentication_service_1 = require("../../services/authentication.service");
var HomeComponent = (function () {
    function HomeComponent(fb, authenticationService, router) {
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.router = router;
        this.messageLogin = "none";
        this.messageCadastro = "none";
        this.user = new user_model_1.UserModel();
        this.formLogin = this.fb.group({
            'email': [this.user.email, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
            'password': [this.user.password, [forms_1.Validators.required, forms_1.Validators.minLength(5)]]
        });
        this.formCadastro = this.fb.group({
            'first_name': [this.user.first_name, forms_1.Validators.required],
            'last_name': [this.user.last_name, forms_1.Validators.required],
            'email': [this.user.email, [forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
            'password': [this.user.password, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            'sex': [this.user.sex, forms_1.Validators.required]
        });
    }
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.formLoginData.value).subscribe(function (data) {
            if (!!data.error) {
                _this.messageLogin = "block";
            }
            else {
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("id", data.id);
                _this.modalLogin.hide();
                _this.router.navigate(['account']);
            }
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.cadastro = function () {
        var _this = this;
        this.authenticationService.cadastrar(this.formCadastro.value).subscribe(function (data) {
            if (data.status) {
                _this.messageCadastro = "block";
            }
        }, function (error) { return console.log(error); });
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('modalLogin'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "modalLogin", void 0);
__decorate([
    core_1.ViewChild('formLoginData'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "formLoginData", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.html',
        styleUrls: ['home.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map