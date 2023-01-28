import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStreetsmartHomeComponent } from './user-streetsmart-home.component';

describe('UserStreetsmartHomeComponent', () => {
  let component: UserStreetsmartHomeComponent;
  let fixture: ComponentFixture<UserStreetsmartHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStreetsmartHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStreetsmartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
