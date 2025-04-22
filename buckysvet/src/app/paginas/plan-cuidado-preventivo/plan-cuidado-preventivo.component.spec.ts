import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCuidadoPreventivoComponent } from './plan-cuidado-preventivo.component';

describe('PlanCuidadoPreventivoComponent', () => {
  let component: PlanCuidadoPreventivoComponent;
  let fixture: ComponentFixture<PlanCuidadoPreventivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanCuidadoPreventivoComponent]
    });
    fixture = TestBed.createComponent(PlanCuidadoPreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
