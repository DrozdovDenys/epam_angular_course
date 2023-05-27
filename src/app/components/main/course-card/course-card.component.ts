import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/core/models/course';

@Component({
	selector: 'app-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
	@Input() course: ICourse;
}
