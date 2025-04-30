import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veterinario } from '../../model/veterinario';  // Asegúrate de que el modelo Veterinario esté importado

@Component({
  selector: 'app-formulario-veterinario',
  templateUrl: './formulario-veterinario.component.html',
  styleUrls: ['./formulario-veterinario.component.css']
})
export class FormularioVeterinarioComponent implements OnInit {
  @Input() veterinario?: Veterinario;  // Recibimos un veterinario para editar
  @Input() modo: 'crear' | 'actualizar' = 'crear';  // Modo de operación, por defecto es 'crear'
  @Output() submitForm = new EventEmitter<Veterinario>();  // Evento para enviar el formulario
  @Output() cancelar = new EventEmitter<void>();  // Evento para cancelar la operación

  veterinarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con validaciones
    this.veterinarioForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],  // Solo números
      contrasena: ['', Validators.required],
      foto: ['', Validators.required],
      numeroAtenciones: ['', [Validators.required, Validators.min(0)]],
      estado: ['Activo', Validators.required]
    });
  }

  ngOnInit(): void {
    // Si estamos en el modo de actualización, llenamos los valores del formulario
    if (this.veterinario) {
      this.veterinarioForm.patchValue(this.veterinario);
    }
  }

  // Enviar el formulario
  onSubmit(): void {
    if (this.veterinarioForm.valid) {
      const veterinarioData: Veterinario = {
        id: this.veterinario ? this.veterinario.id : undefined,  // Asignamos undefined si estamos en el modo de "crear"
        ...this.veterinarioForm.value  // Desestructuramos los valores del formulario
      };
      this.submitForm.emit(veterinarioData);  // Emitimos el formulario
    }
  }

  // Cancelar la operación
  onCancelar(): void {
    this.cancelar.emit();
  }

  // Obtener el título dinámicamente dependiendo del modo
  get titulo(): string {
    return this.modo === 'crear' ? 'Agregar Veterinario' : 'Modificar Veterinario';
  }

  // Obtener el texto dinámico del botón
  get botonSubmit(): string {
    return this.modo === 'crear' ? 'Agregar Veterinario' : 'Guardar Cambios';
  }

  // Para acceder a los controles del formulario más fácilmente
  get f() {
    return this.veterinarioForm.controls;
  }
}
