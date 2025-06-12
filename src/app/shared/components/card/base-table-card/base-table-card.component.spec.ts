import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTableCardComponent } from './base-table-card.component';

describe('BaseTableCardComponent', () => {
  let component: BaseTableCardComponent<any>;
  let fixture: ComponentFixture<BaseTableCardComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseTableCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
