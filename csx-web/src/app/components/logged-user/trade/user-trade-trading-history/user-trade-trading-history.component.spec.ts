import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeTradingHistoryComponent } from './user-trade-trading-history.component';

describe('UserTradeTradingHistoryComponent', () => {
  let component: UserTradeTradingHistoryComponent;
  let fixture: ComponentFixture<UserTradeTradingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeTradingHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeTradingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
