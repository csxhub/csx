import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologpracComponent } from './diologprac.component';

describe('DiologpracComponent', () => {
  let component: DiologpracComponent;
  let fixture: ComponentFixture<DiologpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiologpracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
