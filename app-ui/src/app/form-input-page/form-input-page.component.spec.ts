import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputPageComponent } from './form-input-page.component';

describe('FormInputPageComponent', () => {
  let component: FormInputPageComponent;
  let fixture: ComponentFixture<FormInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
