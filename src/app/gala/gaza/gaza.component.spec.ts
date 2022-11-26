import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazaComponent } from './gaza.component';

describe('GazaComponent', () => {
  let component: GazaComponent;
  let fixture: ComponentFixture<GazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
