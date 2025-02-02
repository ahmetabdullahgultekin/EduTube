import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OurCoursesComponentComponent} from './our-courses-component.component';

describe('OurCoursesComponentComponent', () => {
  let component: OurCoursesComponentComponent;
  let fixture: ComponentFixture<OurCoursesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCoursesComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OurCoursesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
