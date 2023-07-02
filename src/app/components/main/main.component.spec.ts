import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainComponent', () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MainComponent],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize the courses', () => {
		expect(component.courses).toBeDefined();
		expect(component.courses.length).toBeGreaterThan(0);
	});

	it('should update courseIdfromChild when courseCardClick event is emitted', () => {
		const courseId = 1;
		component.onCourseCardClicked(courseId);
		expect(component.courseIdfromChild).toBe(courseId);
	});

	it('should display the searched text in the template', () => {
		const searchInput = 'Angular';
		component.searchInput = searchInput;
		fixture.detectChanges();

		const searchedText = fixture.nativeElement.querySelector('p').textContent;

		expect(searchedText).toContain(searchInput);
	});
});