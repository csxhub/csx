import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeViewModifyOrderComponent } from './user-trade-view-modify-order.component';

describe('UserTradeViewModifyOrderComponent', () => {
  let component: UserTradeViewModifyOrderComponent;
  let fixture: ComponentFixture<UserTradeViewModifyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeViewModifyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeViewModifyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
