import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeMySettingsComponent } from './user-home-my-settings.component';

describe('UserHomeMySettingsComponent', () => {
  let component: UserHomeMySettingsComponent;
  let fixture: ComponentFixture<UserHomeMySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeMySettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeMySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
