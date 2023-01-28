import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuotesStockInformationComponent } from './user-quotes-stock-information.component';

describe('UserQuotesStockInformationComponent', () => {
  let component: UserQuotesStockInformationComponent;
  let fixture: ComponentFixture<UserQuotesStockInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuotesStockInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuotesStockInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
