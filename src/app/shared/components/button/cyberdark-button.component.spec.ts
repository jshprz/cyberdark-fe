import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberdarkButtonComponent } from './cyberdark-button.component';

describe('CyberdarkButtonComponent', () => {
  let component: CyberdarkButtonComponent;
  let fixture: ComponentFixture<CyberdarkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberdarkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberdarkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
