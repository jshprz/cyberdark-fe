import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseListCardComponent } from './base-list-card.component';

describe('BaseListCardComponent', () => {
  let component: BaseListCardComponent;
  let fixture: ComponentFixture<BaseListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
