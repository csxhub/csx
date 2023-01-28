import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNewToInvestingComponent } from './portal-new-to-investing.component';

describe('PortalNewToInvestingComponent', () => {
  let component: PortalNewToInvestingComponent;
  let fixture: ComponentFixture<PortalNewToInvestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalNewToInvestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNewToInvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
