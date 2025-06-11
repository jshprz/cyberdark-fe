import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartCardComponent } from './donut-chart-card.component';

describe('DonutChartCardComponent', () => {
  let component: DonutChartCardComponent;
  let fixture: ComponentFixture<DonutChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutChartCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
