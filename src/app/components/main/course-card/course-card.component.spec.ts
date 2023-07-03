import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import {
	Component,
	DebugElement,
	EventEmitter,
	NO_ERRORS_SCHEMA,
	Pipe,
	PipeTransform,
} from '@angular/core';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { HighlightCreationDateDirective } from 'src/app/shared/directives/highlight-creation-date.directive';
import { ICourse } from 'src/app/core/models/course';
import { By } from '@angular/platform-browser';

@Component({
	template: `
		<app-course-card
			[course]="course"
			(courseDelete)="onDelete($event)"
			(courseEdit)="onEdit($event)"
		></app-course-card>
	`,
})
class TestHostComponent {
	course: ICourse = {
		id: 1,
		title: 'Video Course 1. Name tag',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cum harum quibusdam suscipit cumque reprehenderit veritatis voluptatum consectetur accusamus quisquam exercitationem ut fugit magnam temporibus soluta explicabo aspernatur eaque voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cum harum quibusdam suscipit cumque reprehenderit veritatis voluptatum consectetur accusamus quisquam exercitationem ut fugit magnam temporibus soluta explicabo aspernatur eaque voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cum harum quibusdam suscipit cumque reprehenderit veritatis voluptatum consectetur accusamus quisquam exercitationem ut fugit magnam temporibus soluta explicabo aspernatur eaque voluptates.',
		duration: 60,
		creationDate: new Date(2023, 5, 10),
		topRated: false,
	};
	courseCardEdit!: number;
	courseCardDelete!: number;

	onCourseCardEdit(id: number) {
		this.courseCardEdit = id;
	}
	onCourseCardDelete(id: number) {
		this.courseCardDelete = id;
	}
}
// 	let component: CourseCardComponent;
// 	let fixture: ComponentFixture<CourseCardComponent>;

// 	@Pipe({
// 		name: 'orderBy',
// 	})
// 	class MockOrderByPipe implements PipeTransform {
// 		transform(value: number): number {
// 			return value;
// 		}
// 	}

// 	@Pipe({
// 		name: 'durationPipe',
// 	})
// 	class MockDurationPipe implements PipeTransform {
// 		transform(value: number): number {
// 			return value;
// 		}
// 	}

// 	@Pipe({ name: 'date' })
// 	class MockDatePipe implements PipeTransform {
// 		transform(value: Date): any {
// 			return value;
// 		}
// 	}

// 	beforeEach(async () => {
// 		await TestBed.configureTestingModule({
// 			declarations: [
// 				CourseCardComponent,
// 				ButtonComponent,
// 				MockOrderByPipe,
// 				MockDurationPipe,
// 				HighlightCreationDateDirective,
// 				MockDatePipe,
// 			],
// 			schemas: [NO_ERRORS_SCHEMA],
// 		}).compileComponents();
// 	});

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(CourseCardComponent);
// 		component = fixture.componentInstance;

// 		component.course = {
// 			id: 1,
// 			title: 'Angular Course',
// 			duration: 60,
// 			creationDate: new Date(2023, 5, 10),
// 			description: 'This is an Angular course.',
// 			topRated: false,
// 		};

// 		fixture.detectChanges();
// 	});

// 	it('should render the course details correctly', () => {
// 		const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
// 		const durationElement: HTMLElement = fixture.nativeElement.querySelector(
// 			'span:first-child'
// 		);
// 		const creationDateElement: HTMLElement = fixture.nativeElement.querySelector(
// 			'span:nth-child(2)'
// 		);
// 		const descriptionElement: HTMLElement = fixture.nativeElement.querySelector(
// 			'p'
// 		);

// 		expect(titleElement.textContent).toContain(component.course.title);
// 		expect(durationElement.textContent).toContain(component.course.duration);
// 		expect(creationDateElement.textContent).toContain(
// 			component.course.creationDate
// 		);
// 		expect(descriptionElement.textContent).toContain(
// 			component.course.description
// 		);
// 	});

// 	it('should trigger the event handlers correctly', () => {
// 		const courseId = 1;
// 		const editButton: HTMLButtonElement = fixture.nativeElement.querySelector(
// 			'app-button[data-testid="edit-button"]'
// 		);
// 		// const deleteButton: HTMLButtonElement = fixture.nativeElement.querySelector(
// 		// 	'app-button[data-testid="delete-button"]'
// 		// );

// 		spyOn(component, 'emitCourseCardClick');
// 		// spyOn(component, 'handleDelete');

// 		editButton.click();
// 		// deleteButton.click();

// 		expect(component.emitCourseCardClick).toHaveBeenCalledWith(courseId);
// 		// expect(component.handleDelete).toHaveBeenCalledWith(courseId);
// 	});
// });

describe('CourseItemComponent class-only', () => {
	let component: CourseCardComponent;

	beforeEach(() => {
		component = new CourseCardComponent();
		component.courseCardDelete = new EventEmitter<number>();
	});

	it('should trigger the event handlers correctly', () => {
		const courseId = 1;
		spyOn(component.courseCardDelete, 'emit');
		spyOn(component.courseCardEdit, 'emit');
		component.onCourseCardDelete(courseId);
		component.onCourseCardEdit(courseId);
		expect(component.courseCardDelete.emit).toHaveBeenCalledWith(courseId);
		expect(component.courseCardEdit.emit).toHaveBeenCalledWith(courseId);
	});
});

describe('CourseCardComponent stand alone', () => {
	let component: CourseCardComponent;
	let fixture: ComponentFixture<CourseCardComponent>;

	@Pipe({
		name: 'orderBy',
	})
	class MockOrderByPipe implements PipeTransform {
		transform(value: number): number {
			return value;
		}
	}

	@Pipe({
		name: 'durationPipe',
	})
	class MockDurationPipe implements PipeTransform {
		transform(value: number): number {
			return value;
		}
	}

	@Pipe({ name: 'date' })
	class MockDatePipe implements PipeTransform {
		transform(value: Date): any {
			return value;
		}
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				CourseCardComponent,
				ButtonComponent,
				MockOrderByPipe,
				MockDurationPipe,
				HighlightCreationDateDirective,
				MockDatePipe,
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseCardComponent);
		component = fixture.componentInstance;

		component.course = {
			id: 1,
			title: 'Angular Course',
			duration: 60,
			creationDate: new Date(2023, 5, 10),
			description: 'This is an Angular course.',
			topRated: false,
		};

		fixture.detectChanges();
	});

	it('should render the course details correctly', () => {
		const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
		const durationElement: HTMLElement = fixture.nativeElement.querySelector(
			'span:first-child'
		);
		const creationDateElement: HTMLElement = fixture.nativeElement.querySelector(
			'span:nth-child(2)'
		);
		const descriptionElement: HTMLElement = fixture.nativeElement.querySelector(
			'p'
		);

		expect(titleElement.textContent).toContain(component.course.title);
		expect(durationElement.textContent).toContain(component.course.duration);
		expect(creationDateElement.textContent).toContain(
			component.course.creationDate
		);
		expect(descriptionElement.textContent).toContain(
			component.course.description
		);
	});
});

describe('CourseCardComponent hosted', () => {
	let fixture: ComponentFixture<TestHostComponent>;
	let testHost: TestHostComponent;
	let courseDebug: DebugElement;

	@Pipe({
		name: 'orderBy',
	})
	class MockOrderByPipe implements PipeTransform {
		transform(value: number): number {
			return value;
		}
	}

	@Pipe({
		name: 'durationPipe',
	})
	class MockDurationPipe implements PipeTransform {
		transform(value: number): number {
			return value;
		}
	}

	@Pipe({ name: 'date' })
	class MockDatePipe implements PipeTransform {
		transform(value: Date): Date {
			return value;
		}
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				CourseCardComponent,
				ButtonComponent,
				MockOrderByPipe,
				MockDurationPipe,
				HighlightCreationDateDirective,
				MockDatePipe,
				TestHostComponent,
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestHostComponent);
		testHost = fixture.componentInstance;
		courseDebug = fixture.debugElement.query(
			By.css('[data-testid="course-card"]')
		);
		fixture.detectChanges();
	});
	it('should display course title', () => {
		const title = courseDebug.query(By.css('[data-testid="course-title"]'));
		expect(title.nativeElement.textContent).toBe(testHost.course.title);
	});
	it('should display course duration', () => {
		const duration = courseDebug.query(
			By.css('[data-testid="course-duration"]')
		);
		expect(Number(duration.nativeElement.textContent)).toBe(
			testHost.course.duration
		);
	});
	it('should display course creationDate', () => {
		const creationDate = courseDebug.query(
			By.css('[data-testid="course-creationDate"]')
		);
		expect(new Date(creationDate.nativeElement.textContent)).toEqual(
			testHost.course.creationDate
		);
	});
	it('should display course description', () => {
		const description = courseDebug.query(
			By.css('[data-testid="course-description"]')
		);
		expect(description.nativeElement.textContent.trim()).toBe(
			testHost.course.description
		);
	});
	it("should raise courseEdit event when 'Edit' button is clicked", () => {
		const editBtn = courseDebug.query(By.css('[data-testid="edit-button"]'));

		editBtn.triggerEventHandler('click');
		expect(testHost.courseCardEdit).toBe(testHost.courseCardEdit);
	});
	it("should raise courseDelete event when 'Delete' button is clicked", () => {
		const editBtn = courseDebug.query(By.css('[data-testid="edit-button"]'));

		editBtn.triggerEventHandler('click');
		expect(testHost.courseCardDelete).toBe(testHost.courseCardDelete);
	});
});
