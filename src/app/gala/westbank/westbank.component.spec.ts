import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestbankComponent } from './westbank.component';

describe('WestbankComponent', () => {
  let component: WestbankComponent;
  let fixture: ComponentFixture<WestbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WestbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
