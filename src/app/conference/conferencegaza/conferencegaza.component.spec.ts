import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencegazaComponent } from './conferencegaza.component';

describe('ConferencegazaComponent', () => {
  let component: ConferencegazaComponent;
  let fixture: ComponentFixture<ConferencegazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencegazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencegazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
