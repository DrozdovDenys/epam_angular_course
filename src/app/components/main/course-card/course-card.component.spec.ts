import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { HighlightCreationDateDirective } from 'src/app/shared/directives/highlight-creation-date.directive';

describe('CourseCardComponent', () => {
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
			schemas: [NO_ERRORS_SCHEMA],
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
