import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeCareerComponent } from './user-home-career.component';

describe('UserHomeCareerComponent', () => {
  let component: UserHomeCareerComponent;
  let fixture: ComponentFixture<UserHomeCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
