import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AccountComponent } from './pages/account/account.component';
import { ProtectRoutesService } from './services/protect-routes.service';
import { LoginComponent } from './pages/login/login.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { MessageComponent } from './pages/message/message.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'account',
		component: AccountComponent,
		canActivate: [ProtectRoutesService]
	},
	{
		path: 'friends',
		component: FriendsComponent,
		canActivate: [ProtectRoutesService]
	},
	{
		path: 'message',
		component: MessageComponent,
		canActivate: [ProtectRoutesService]
	},
	{
		path: 'notifications',
		component: NotificationsComponent,
		canActivate: [ProtectRoutesService]
	},
	{
		path: 'perfil/:id',
		component: PerfilComponent,
		canActivate: [ProtectRoutesService]
	},
	{
		path: '**', component: PageNotFoundComponent
	}
];