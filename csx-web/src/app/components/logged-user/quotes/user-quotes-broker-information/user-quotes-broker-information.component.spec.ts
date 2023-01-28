import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuotesBrokerInformationComponent } from './user-quotes-broker-information.component';

describe('UserQuotesBrokerInformationComponent', () => {
  let component: UserQuotesBrokerInformationComponent;
  let fixture: ComponentFixture<UserQuotesBrokerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuotesBrokerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuotesBrokerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
