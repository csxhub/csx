import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuotesHomeComponent } from './user-quotes-home.component';

describe('UserQuotesHomeComponent', () => {
  let component: UserQuotesHomeComponent;
  let fixture: ComponentFixture<UserQuotesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuotesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuotesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
