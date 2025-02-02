import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ApplyNowComponentComponent} from './apply-now-component.component';

describe('ApplyNowComponentComponent', () => {
  let component: ApplyNowComponentComponent;
  let fixture: ComponentFixture<ApplyNowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyNowComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApplyNowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
