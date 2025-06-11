import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoMapCardComponent } from './geo-map-card.component';

describe('GeoMapCardComponent', () => {
  let component: GeoMapCardComponent;
  let fixture: ComponentFixture<GeoMapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoMapCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoMapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
