import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeOhOrderComponent } from './user-trade-oh-order.component';

describe('UserTradeOhOrderComponent', () => {
  let component: UserTradeOhOrderComponent;
  let fixture: ComponentFixture<UserTradeOhOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeOhOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeOhOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
