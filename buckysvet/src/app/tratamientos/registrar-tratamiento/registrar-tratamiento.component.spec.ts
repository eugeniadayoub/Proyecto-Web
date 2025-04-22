import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTratamientoComponent } from './registrar-tratamiento.component';

describe('RegistrarTratamientoComponent', () => {
  let component: RegistrarTratamientoComponent;
  let fixture: ComponentFixture<RegistrarTratamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTratamientoComponent]
    });
    fixture = TestBed.createComponent(RegistrarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
