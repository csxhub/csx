import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeInquiryComponent } from './user-home-home.component';

describe('UserHomeInquiryComponent', () => {
  let component: UserHomeInquiryComponent;
  let fixture: ComponentFixture<UserHomeInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeInquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
