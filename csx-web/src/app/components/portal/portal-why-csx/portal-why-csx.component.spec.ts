import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalWhyCsxComponent } from './portal-why-csx.component';

describe('PortalWhyCsxComponent', () => {
  let component: PortalWhyCsxComponent;
  let fixture: ComponentFixture<PortalWhyCsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalWhyCsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalWhyCsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
