import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCtaComponent } from './business-cta.component';

describe('BusinessCtaComponent', () => {
  let component: BusinessCtaComponent;
  let fixture: ComponentFixture<BusinessCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
