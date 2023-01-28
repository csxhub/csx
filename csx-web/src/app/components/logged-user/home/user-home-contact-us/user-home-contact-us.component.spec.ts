import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeContactUsComponent } from './user-home-contact-us.component';

describe('UserHomeContactUsComponent', () => {
  let component: UserHomeContactUsComponent;
  let fixture: ComponentFixture<UserHomeContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
