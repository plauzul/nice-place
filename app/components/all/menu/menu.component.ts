import { Component, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.html',
    styleUrls: ['menu.css']
})

export class MenuComponent {

    @Input() user: UserModel;
}