import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/core/models/course';
import { courses as data } from '../../data/courses';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	courses: ICourse[] = [];
	searchInput = '';
	courseIdfromChild: number;

	onCourseCardClicked(id: number) {
		this.courseIdfromChild = id;
	}
	ngOnInit(): void {
		this.courses = data;
	}

	trackById(index: number, item: ICourse): number {
		return item.id;
	}

	handleLoadMore(): void {
		console.log('LoadMore click');
	}

	filterCourse(courses: ICourse[], searchtext: string): ICourse[] {
		const filterPipe = new FilterPipe();
		return filterPipe.transform(courses, searchtext);
	}
}
