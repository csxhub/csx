import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeEnterOrderComponent } from './user-trade-enter-order.component';

describe('UserTradeEnterOrderComponent', () => {
  let component: UserTradeEnterOrderComponent;
  let fixture: ComponentFixture<UserTradeEnterOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeEnterOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeEnterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
