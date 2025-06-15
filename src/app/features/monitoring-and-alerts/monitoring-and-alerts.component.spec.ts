import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAndAlertsComponent } from './monitoring-and-alerts.component';

describe('MonitoringAndAlertsComponent', () => {
  let component: MonitoringAndAlertsComponent;
  let fixture: ComponentFixture<MonitoringAndAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringAndAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringAndAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
