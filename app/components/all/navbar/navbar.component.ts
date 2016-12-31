import { Component, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['navbar.css']
})

export class NavbarComponent {

    @Input() user: UserModel;
}