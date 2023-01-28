import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeHomeComponent } from './user-trade-home.component';

describe('UserTradeHomeComponent', () => {
  let component: UserTradeHomeComponent;
  let fixture: ComponentFixture<UserTradeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
