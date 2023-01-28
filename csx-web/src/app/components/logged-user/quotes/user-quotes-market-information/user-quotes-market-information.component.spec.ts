import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuotesMarketInformationComponent } from './user-quotes-market-information.component';

describe('UserQuotesMarketInformationComponent', () => {
  let component: UserQuotesMarketInformationComponent;
  let fixture: ComponentFixture<UserQuotesMarketInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuotesMarketInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuotesMarketInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
