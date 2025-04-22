import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPacientesCronicosComponent } from './plan-pacientes-cronicos.component';

describe('PlanPacientesCronicosComponent', () => {
  let component: PlanPacientesCronicosComponent;
  let fixture: ComponentFixture<PlanPacientesCronicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPacientesCronicosComponent]
    });
    fixture = TestBed.createComponent(PlanPacientesCronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
