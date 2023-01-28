import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalActiveTradingComponent } from './portal-active-trading.component';

describe('PortalActiveTradingComponent', () => {
  let component: PortalActiveTradingComponent;
  let fixture: ComponentFixture<PortalActiveTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalActiveTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalActiveTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
