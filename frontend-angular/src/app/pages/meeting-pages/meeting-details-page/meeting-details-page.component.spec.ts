import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetingDetailsPageComponent} from './meeting-details-page.component';

describe('MeetingDetailsPageComponent', () => {
  let component: MeetingDetailsPageComponent;
  let fixture: ComponentFixture<MeetingDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingDetailsPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MeetingDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
