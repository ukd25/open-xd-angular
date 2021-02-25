import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCtaComponent } from './nav-cta.component';

describe('NavCtaComponent', () => {
  let component: NavCtaComponent;
  let fixture: ComponentFixture<NavCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
