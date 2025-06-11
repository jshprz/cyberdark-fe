import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretsKeysCardComponent } from './secrets-keys-card.component';

describe('SecretsKeysCardComponent', () => {
  let component: SecretsKeysCardComponent;
  let fixture: ComponentFixture<SecretsKeysCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretsKeysCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretsKeysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
