import { Component } from '@angular/core';
import { ICourse } from 'src/app/models/course';
import { courses as data } from '../../data/courses';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent {
	courses: ICourse[] = data;
}
