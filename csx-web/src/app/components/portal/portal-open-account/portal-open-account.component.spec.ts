import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalOpenAccountComponent } from './portal-open-account.component';

describe('PortalOpenAccountComponent', () => {
  let component: PortalOpenAccountComponent;
  let fixture: ComponentFixture<PortalOpenAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalOpenAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalOpenAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
