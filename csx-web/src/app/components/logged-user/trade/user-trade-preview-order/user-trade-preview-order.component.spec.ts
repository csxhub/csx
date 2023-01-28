import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradePreviewOrderComponent } from './user-trade-preview-order.component';

describe('UserTradePreviewOrderComponent', () => {
  let component: UserTradePreviewOrderComponent;
  let fixture: ComponentFixture<UserTradePreviewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradePreviewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradePreviewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
