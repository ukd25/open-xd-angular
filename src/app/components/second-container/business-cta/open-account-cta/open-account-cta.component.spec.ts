import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAccountCtaComponent } from './open-account-cta.component';

describe('OpenAccountCtaComponent', () => {
  let component: OpenAccountCtaComponent;
  let fixture: ComponentFixture<OpenAccountCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAccountCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAccountCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
