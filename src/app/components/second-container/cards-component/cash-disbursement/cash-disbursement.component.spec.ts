import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDisbursementComponent } from './cash-disbursement.component';

describe('CashDisbursementComponent', () => {
  let component: CashDisbursementComponent;
  let fixture: ComponentFixture<CashDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashDisbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
