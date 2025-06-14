import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDiscoveryComponent } from './asset-discovery.component';

describe('AssetDiscoveryComponent', () => {
  let component: AssetDiscoveryComponent;
  let fixture: ComponentFixture<AssetDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetDiscoveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
