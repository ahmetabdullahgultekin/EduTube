import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpcomingMeetingsComponentComponent} from './upcoming-meetings-component.component';

describe('UpcomingMeetingsComponentComponent', () => {
  let component: UpcomingMeetingsComponentComponent;
  let fixture: ComponentFixture<UpcomingMeetingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMeetingsComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpcomingMeetingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
