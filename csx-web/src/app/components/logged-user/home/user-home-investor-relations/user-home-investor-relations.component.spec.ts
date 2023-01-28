import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeInvestorRelationsComponent } from './user-home-investor-relations.component';

describe('UserHomeInvestorRelationsComponent', () => {
  let component: UserHomeInvestorRelationsComponent;
  let fixture: ComponentFixture<UserHomeInvestorRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeInvestorRelationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeInvestorRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
