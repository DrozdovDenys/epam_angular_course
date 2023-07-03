import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/core/models/course';

@Pipe({
	name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
	transform(array: ICourse[]): ICourse[] {
		if (!array || !Array.isArray(array)) {
			return array;
		}

		return array.sort((a, b) => {
			if (a.creationDate < b.creationDate) {
				return -1;
			}
			if (a.creationDate > b.creationDate) {
				return 1;
			} else {
				return 0;
			}
		});
	}
}
