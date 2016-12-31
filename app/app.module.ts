// Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSemanticModule } from 'ng-semantic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Definitions of Routes
import { appRoutes } from './app.routes';

// Components Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { MessageComponent } from './pages/message/message.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

// Components Reusable
import { PostsComponent } from './components/account/posts/posts.component';
import { ChatComponent } from './components/all/chat/chat.component';
import { AddPostComponent } from './components/account/add-post/add-post.component';
import { MenuComponent } from './components/all/menu/menu.component';
import { AdvertisementsComponent } from './components/all/advertisements/advertisements.component';
import { NavbarComponent } from './components/all/navbar/navbar.component';
import { ListFriendsComponent } from './components/friends/list-friends/list-friends.component';

// Providers
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { ProtectRoutesService } from './services/protect-routes.service';
import { PostsService } from './services/posts.service';
import { FriendService } from './services/friend.service';

// Pipes
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgSemanticModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    FilterPipe,
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AccountComponent,
    LoginComponent,
    PostsComponent,
    ChatComponent,
    AddPostComponent,
    FriendsComponent,
    MenuComponent,
    MessageComponent,
    NotificationsComponent,
    PerfilComponent,
    AdvertisementsComponent,
    NavbarComponent,
    ListFriendsComponent
  ],
  providers: [
    UserService,
    AuthenticationService,
    ProtectRoutesService,
    PostsService,
    FriendService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {}

