import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListWithScoresComponent } from './card-list-with-scores.component';

describe('CardListWithScoresComponent', () => {
  let component: CardListWithScoresComponent;
  let fixture: ComponentFixture<CardListWithScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListWithScoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListWithScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
