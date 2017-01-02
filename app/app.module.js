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
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var ng_semantic_1 = require("ng-semantic");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// Definitions of Routes
var app_routes_1 = require("./app.routes");
// Components Pages
var app_component_1 = require("./app.component");
var home_component_1 = require("./pages/home/home.component");
var page_not_found_component_1 = require("./pages/page-not-found/page-not-found.component");
var account_component_1 = require("./pages/account/account.component");
var login_component_1 = require("./pages/login/login.component");
var friends_component_1 = require("./pages/friends/friends.component");
var message_component_1 = require("./pages/message/message.component");
var notifications_component_1 = require("./pages/notifications/notifications.component");
var perfil_component_1 = require("./pages/perfil/perfil.component");
// Components Reusable
var posts_component_1 = require("./components/account/posts/posts.component");
var chat_component_1 = require("./components/all/chat/chat.component");
var add_post_component_1 = require("./components/account/add-post/add-post.component");
var menu_component_1 = require("./components/all/menu/menu.component");
var advertisements_component_1 = require("./components/all/advertisements/advertisements.component");
var navbar_component_1 = require("./components/all/navbar/navbar.component");
var list_friends_component_1 = require("./components/friends/list-friends/list-friends.component");
var chat_box_component_1 = require("./components/all/chat-box/chat-box.component");
// Providers
var user_service_1 = require("./services/user.service");
var authentication_service_1 = require("./services/authentication.service");
var protect_routes_service_1 = require("./services/protect-routes.service");
var posts_service_1 = require("./services/posts.service");
var friend_service_1 = require("./services/friend.service");
// Pipes
var filter_pipe_1 = require("./pipes/filter/filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(app_routes_1.appRoutes),
            platform_browser_1.BrowserModule,
            ng_semantic_1.NgSemanticModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [
            filter_pipe_1.FilterPipe,
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            page_not_found_component_1.PageNotFoundComponent,
            account_component_1.AccountComponent,
            login_component_1.LoginComponent,
            posts_component_1.PostsComponent,
            chat_component_1.ChatComponent,
            add_post_component_1.AddPostComponent,
            friends_component_1.FriendsComponent,
            menu_component_1.MenuComponent,
            message_component_1.MessageComponent,
            notifications_component_1.NotificationsComponent,
            perfil_component_1.PerfilComponent,
            advertisements_component_1.AdvertisementsComponent,
            navbar_component_1.NavbarComponent,
            list_friends_component_1.ListFriendsComponent,
            chat_box_component_1.ChatBoxComponent
        ],
        providers: [
            user_service_1.UserService,
            authentication_service_1.AuthenticationService,
            protect_routes_service_1.ProtectRoutesService,
            posts_service_1.PostsService,
            friend_service_1.FriendService
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map