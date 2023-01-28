import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeChangeProfileComponent } from './user-home-change-profile.component';

describe('UserHomeChangeProfileComponent', () => {
  let component: UserHomeChangeProfileComponent;
  let fixture: ComponentFixture<UserHomeChangeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeChangeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeChangeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
