import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResearchHomeComponent } from './user-research-home.component';

describe('UserResearchHomeComponent', () => {
  let component: UserResearchHomeComponent;
  let fixture: ComponentFixture<UserResearchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserResearchHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
