import { Component, OnInit } from '@angular/core';
import { DuenosService } from '../../service/duenos.service';
import { Dueno } from '../../model/dueno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-duenos',
  templateUrl: './informacion-duenos.component.html',
  styleUrls: ['./informacion-duenos.component.css']
})
export class InformacionDuenosComponent implements OnInit {

  duenos: Dueno[] = [];
  duenoForm: FormGroup;

  constructor(private duenoService: DuenosService, private fb: FormBuilder) {
    this.duenoForm = this.fb.group({
      cedula: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      imagenUrl: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.cargarDuenos();
  }

  cargarDuenos(): void {
    this.duenoService.obtenerTodos().subscribe({
      next: (duenos: Dueno[]) => {
        this.duenos = duenos.map(dueno => ({
          ...dueno,
          id: dueno.id || 0
        }));
      },
      error: (error) => {
        console.error('Error al cargar los dueños:', error);
        alert('Hubo un error al cargar los dueños.');
      }
    });
  }

  eliminarDueno(id: number): void {
    if (confirm("¿Estás seguro de que deseas eliminar a este dueño?")) {
      this.duenoService.eliminarDueno(id).subscribe({
        next: () => {
          console.log('Dueño eliminado');
          this.cargarDuenos()
        },
        error: (error) => {
          console.error('Error al eliminar el dueño:', error);
          alert('Error al eliminar el dueño. Verifique los logs del servidor.');
        },
        complete: () => {
          // Opcionalmente, si quieres hacer algo cuando se complete la eliminación
          console.log('Eliminación de dueño completada');
        }
      });
    }
  }  

  agregarDueno(): void {
    if (this.duenoForm.valid) {
      const nuevoDueno: Dueno = this.duenoForm.value;
      this.duenoService.guardarDueno(nuevoDueno).subscribe({
        next: () => {
          this.cargarDuenos(); // Recargar la lista de dueños después de agregar uno
          this.duenoForm.reset();
          alert('Dueño agregado exitosamente');
        },
        error: (err) => {
          console.error('Error al agregar el dueño', err);
          alert('Hubo un error al agregar el dueño.');
        }
      });
    } else {
      alert("Por favor, rellene todos los campos correctamente.");
    }
  }

  // Método para validar si el formulario tiene errores
  get f() {
    return this.duenoForm.controls;
  }
}
