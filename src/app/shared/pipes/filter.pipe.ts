import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/core/models/course';

@Pipe({
	name: 'filter',
	pure: false,
})
export class FilterPipe implements PipeTransform {
	transform(courses: ICourse[], searchText: string): ICourse[] {
		if (!courses) {
			return [];
		}
		if (!searchText) {
			return courses;
		}
		return courses.filter((course) => {
			return course.title.toLowerCase().includes(searchText.toLowerCase());
		});
	}
}
