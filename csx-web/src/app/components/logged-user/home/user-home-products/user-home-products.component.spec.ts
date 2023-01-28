import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeProductsComponent } from './user-home-products.component';

describe('UserHomeProductsComponent', () => {
  let component: UserHomeProductsComponent;
  let fixture: ComponentFixture<UserHomeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
