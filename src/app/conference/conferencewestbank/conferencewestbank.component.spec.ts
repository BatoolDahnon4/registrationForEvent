import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencewestbankComponent } from './conferencewestbank.component';

describe('ConferencewestbankComponent', () => {
  let component: ConferencewestbankComponent;
  let fixture: ComponentFixture<ConferencewestbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencewestbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencewestbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
