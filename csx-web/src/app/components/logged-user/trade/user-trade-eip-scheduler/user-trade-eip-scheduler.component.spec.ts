import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeEipSchedulerComponent } from './user-trade-eip-scheduler.component';

describe('UserTradeEipSchedulerComponent', () => {
  let component: UserTradeEipSchedulerComponent;
  let fixture: ComponentFixture<UserTradeEipSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeEipSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeEipSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
