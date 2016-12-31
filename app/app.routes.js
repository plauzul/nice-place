"use strict";
var home_component_1 = require("./pages/home/home.component");
var page_not_found_component_1 = require("./pages/page-not-found/page-not-found.component");
var account_component_1 = require("./pages/account/account.component");
var protect_routes_service_1 = require("./services/protect-routes.service");
var login_component_1 = require("./pages/login/login.component");
var friends_component_1 = require("./pages/friends/friends.component");
var message_component_1 = require("./pages/message/message.component");
var notifications_component_1 = require("./pages/notifications/notifications.component");
var perfil_component_1 = require("./pages/perfil/perfil.component");
exports.appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'account',
        component: account_component_1.AccountComponent,
        canActivate: [protect_routes_service_1.ProtectRoutesService]
    },
    {
        path: 'friends',
        component: friends_component_1.FriendsComponent,
        canActivate: [protect_routes_service_1.ProtectRoutesService]
    },
    {
        path: 'message',
        component: message_component_1.MessageComponent,
        canActivate: [protect_routes_service_1.ProtectRoutesService]
    },
    {
        path: 'notifications',
        component: notifications_component_1.NotificationsComponent,
        canActivate: [protect_routes_service_1.ProtectRoutesService]
    },
    {
        path: 'perfil/:id',
        component: perfil_component_1.PerfilComponent,
        canActivate: [protect_routes_service_1.ProtectRoutesService]
    },
    {
        path: '**', component: page_not_found_component_1.PageNotFoundComponent
    }
];
//# sourceMappingURL=app.routes.js.map