import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css']
})
export class FormularioMascotaComponent implements OnInit {
  @Input() mascota?: Mascota;
  @Input() modo: 'crear' | 'actualizar' = 'crear';
  @Output() submitForm = new EventEmitter<Mascota>();
  @Output() cancelar = new EventEmitter<void>();

  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(0)]],
      peso: [null, [Validators.required, Validators.min(0)]],
      enfermedad: [''],
      estado: ['Activo', Validators.required],
      imagenUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.mascota) {
      // Si estamos en el modo de actualización, se llenan los valores.
      this.mascotaForm.patchValue(this.mascota);
    }
  }

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      const mascotaData: Mascota = {
        mascotaId: this.mascota ? this.mascota.mascotaId : undefined,  // Se asigna undefined si estamos en el modo de "crear"
        ...this.mascotaForm.value
      };
      this.submitForm.emit(mascotaData);
    }
  }

  onCancelar(): void {
    this.cancelar.emit();
  }

  get titulo(): string {
    return this.modo === 'crear' ? 'Agregar Mascota' : 'Modificar Mascota';
  }

  get botonSubmit(): string {
    return this.modo === 'crear' ? 'Agregar Mascota' : 'Guardar Cambios';
  }

  // Para verificar los errores del formulario
  get f() {
    return this.mascotaForm.controls;
  }
}
