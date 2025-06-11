import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaksCardComponent } from './leaks-card.component';

describe('LeaksCardComponent', () => {
  let component: LeaksCardComponent;
  let fixture: ComponentFixture<LeaksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaksCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
