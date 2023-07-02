import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the input component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind placeholder value correctly', () => {
    const placeholder = 'Enter a value';
    component.placeholder = placeholder;
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.placeholder).toBe(placeholder);
  });

  it('should bind type value correctly', () => {
    const type = 'search';
    component.type = type;
    fixture.detectChanges();

    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.type).toBe(type);
  });

  it('should not render search button if searchBtn is false', () => {
    component.searchBtn = false;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeFalsy();
  });
});
