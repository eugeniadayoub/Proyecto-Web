  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Dueno } from '../../model/dueno';

  @Component({
    selector: 'app-formulario-dueno',
    templateUrl: './formulario-dueno.component.html',
    styleUrls: ['./formulario-dueno.component.css']
  })
  export class FormularioDuenoComponent implements OnInit {
    @Input() dueno?: Dueno;
    @Input() modo: 'crear' | 'actualizar' = 'crear';
    @Output() submitForm = new EventEmitter<Dueno>();
    @Output() cancelar = new EventEmitter<void>();

    duenoForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.duenoForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        telefono: ['', Validators.required],
        imagenUrl: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    ngOnInit(): void {
      if (this.dueno) {
        this.duenoForm.patchValue(this.dueno);
      }
    }

    onSubmit(): void {
      if (this.duenoForm.valid) {
        const duenoData: Dueno = {
          id: this.dueno ? this.dueno.id : undefined, // undefined si estamos en modo crear
          ...this.duenoForm.value
        };
        this.submitForm.emit(duenoData);
      } else {
        console.warn('Formulario inválido:', this.duenoForm.value);
        this.duenoForm.markAllAsTouched();
      }    
    }

    onCancelar(): void {
      this.cancelar.emit();
    }

    get titulo(): string {
        this.duenoForm.markAllAsTouched();
      return this.modo === 'crear' ? 'Agregar Dueño' : 'Modificar Dueño';
    }

    get botonSubmit(): string {
      return this.modo === 'crear' ? 'Agregar Dueño' : 'Guardar Cambios';
    }
  }
