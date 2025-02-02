import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OurFactsComponentComponent} from './our-facts-component.component';

describe('OurFactsComponentComponent', () => {
  let component: OurFactsComponentComponent;
  let fixture: ComponentFixture<OurFactsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFactsComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OurFactsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
