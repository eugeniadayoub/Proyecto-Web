import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMedicoIntegralComponent } from './plan-medico-integral.component';

describe('PlanMedicoIntegralComponent', () => {
  let component: PlanMedicoIntegralComponent;
  let fixture: ComponentFixture<PlanMedicoIntegralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanMedicoIntegralComponent]
    });
    fixture = TestBed.createComponent(PlanMedicoIntegralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
