import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseCardComponent', () => {
	let component: CourseCardComponent;
	let fixture: ComponentFixture<CourseCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CourseCardComponent],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseCardComponent);
		component = fixture.componentInstance;

		component.course = {
			id: 1,
			title: 'Angular Course',
			duration: '2 hours',
			creationDate: '2023-06-10',
			description: 'This is an Angular course.',
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

	it('should trigger the event handlers correctly', () => {
		const courseId = 1;
		const editButton: HTMLButtonElement = fixture.nativeElement.querySelector(
			'app-button[data-testid="edit-button"]'
		);
		// const deleteButton: HTMLButtonElement = fixture.nativeElement.querySelector(
		// 	'app-button[data-testid="delete-button"]'
		// );

		spyOn(component, 'emitCourseCardClick');
		// spyOn(component, 'handleDelete');

		editButton.click();
		// deleteButton.click();

		expect(component.emitCourseCardClick).toHaveBeenCalledWith(courseId);
		// expect(component.handleDelete).toHaveBeenCalledWith(courseId);
	});
});
