import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradePortfolioComponent } from './user-trade-portfolio.component';

describe('UserTradePortfolioComponent', () => {
  let component: UserTradePortfolioComponent;
  let fixture: ComponentFixture<UserTradePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
