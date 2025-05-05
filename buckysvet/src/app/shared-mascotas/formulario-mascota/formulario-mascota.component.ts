import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../../model/mascota';
import { DuenosService } from '../../service/duenos.service';
import { Dueno } from '../../model/dueno';
import { Veterinario } from '../../model/veterinario';
import { VeterinarioService } from '../../service/veterinario.service';

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
  listaDuenos: Dueno[] = [];
  listaVeterinarios: Veterinario[] = [];

  constructor(private fb: FormBuilder, private duenosService: DuenosService, private veterinarioService: VeterinarioService) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(0)]],
      peso: [null, [Validators.required, Validators.min(0)]],
      enfermedad: [''],
      estado: ['Activo', Validators.required],
      imagenUrl: ['', Validators.required],
      idDueno: [null],
      idVeterinario: [null]
    });
  }

  ngOnInit(): void {
    if (this.mascota) {
      const idDueno = this.mascota?.dueno?.id ?? null;
      this.mascotaForm.patchValue({
        ...this.mascota,
        idDueno,
        idVeterinario: this.mascota?.veterinario?.id ?? null
      });

      if (this.modo === 'actualizar') {
        this.mascotaForm.get('idDueno')?.disable();
      }      
    
      console.log('Dueño precargado:', this.mascota?.dueno?.id);
      console.log('Veterinario precargado:', this.mascota?.veterinario?.id);
    }    
  
    this.cargarDuenos();
    this.cargarVeterinarios();
  }
   

  cargarDuenos(): void {
    this.duenosService.obtenerTodos().subscribe({
      next: (data) => {
        this.listaDuenos = data;
      },
      error: (error) => {
        console.error('Error fetching owners:', error);
      }
    });
  }  

  cargarVeterinarios(): void {
    this.veterinarioService.obtenerTodos().subscribe({
      next: (data) => {
        this.listaVeterinarios = data;
      },
      error: (error) => {
        console.error('Error al obtener veterinarios:', error);
      }
    });
  }  

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      const formValue = this.mascotaForm.getRawValue(); // 👈 incluye deshabilitados
      const mascotaData: Mascota = {
        mascotaId: this.mascota ? this.mascota.mascotaId : undefined,
        ...formValue
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
