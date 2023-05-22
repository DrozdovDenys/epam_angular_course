import { Component } from '@angular/core';
import { user } from 'src/app/data/user';
import { IUser } from 'src/app/models/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	title = 'Video Course';
	userName: IUser = user;
}
