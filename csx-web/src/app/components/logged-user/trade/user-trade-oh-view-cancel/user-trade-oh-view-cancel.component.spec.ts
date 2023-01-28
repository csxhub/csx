import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeOhViewCancelComponent } from './user-trade-oh-view-cancel.component';

describe('UserTradeOhViewCancelComponent', () => {
  let component: UserTradeOhViewCancelComponent;
  let fixture: ComponentFixture<UserTradeOhViewCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeOhViewCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeOhViewCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
