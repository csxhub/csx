import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeDownloadsComponent } from './user-home-downloads.component';

describe('UserHomeDownloadsComponent', () => {
  let component: UserHomeDownloadsComponent;
  let fixture: ComponentFixture<UserHomeDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeDownloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
