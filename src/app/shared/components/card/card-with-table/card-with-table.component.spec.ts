import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithTableComponent } from './card-with-table.component';

describe('CardWithTableComponent', () => {
  let component: CardWithTableComponent;
  let fixture: ComponentFixture<CardWithTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
