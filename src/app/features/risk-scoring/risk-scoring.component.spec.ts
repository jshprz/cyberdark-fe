import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskScoringComponent } from './risk-scoring.component';

describe('RiskScoringComponent', () => {
  let component: RiskScoringComponent;
  let fixture: ComponentFixture<RiskScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskScoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
