import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit,
	OnDestroy,
	OnChanges,
	SimpleChanges,
	AfterViewInit,
	AfterViewChecked,
	AfterContentInit,
	AfterContentChecked,
	DoCheck,
} from '@angular/core';
import { ICourse } from 'src/app/core/models/course';

@Component({
	selector: 'app-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent
	implements
		OnInit,
		OnDestroy,
		OnChanges,
		AfterViewInit,
		AfterViewChecked,
		AfterContentInit,
		AfterContentChecked,
		DoCheck {
	constructor() {
		console.log('CourseCardComponent - constructor');
	}

	ngOnInit() {
		console.log('CourseCardComponent - ngOnInit');
	}
	ngOnChanges(changes: SimpleChanges) {
		console.log('CourseCardComponent - ngOnChanges', changes);
	}
	ngDoCheck() {
		console.log('CourseCardComponent - ngDoCheck');
	}
	ngAfterViewInit() {
		console.log('CourseCardComponent - ngAfterViewInit');
	}
	ngAfterViewChecked() {
		console.log('CourseCardComponent - ngAfterViewChecked');
	}
	ngAfterContentInit() {
		console.log('CourseCardComponent - ngAfterContentInit');
	}
	ngAfterContentChecked() {
		console.log('CourseCardComponent - ngAfterContentChecked');
	}
	ngOnDestroy() {
		console.log('CourseCardComponent - ngOnDestroy');
	}

	@Input() course: ICourse;
	@Output() courseCardEdit: EventEmitter<number> = new EventEmitter();
	@Output() courseCardDelete: EventEmitter<number> = new EventEmitter();

	onCourseCardEdit(id: number) {
		console.log('CourseCardComponent - emitCourseCardClick', id);
		this.courseCardEdit.emit(id);
	}
	onCourseCardDelete(id: number) {
		console.log('handleDelete', id);
		this.courseCardDelete.emit(id);
	}
}
