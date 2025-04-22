import { Component } from '@angular/core';
import { MascotasService } from '../../service/mascotas.service';
import { Mascota } from '../../model/mascota';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {

  mascotas: Mascota[] = [];
  mascotaForm: FormGroup;

  constructor(private mascotasService: MascotasService, private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(0)]],
      peso: [null, [Validators.required, Validators.min(0)]],
      enfermedad: [''],
      imagenUrl: ['', Validators.required],
      estado: ['Activo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.mascotasService.obtenerTodas().subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
      },
      error: (err) => {
        console.log('Error al cargar las mascotas', err);
      }
    });
  }

  eliminarMascota(id: number): void {
    this.mascotasService.eliminar(id).subscribe({
      next: () => {
        this.cargarMascotas(); 
      },
      error: (err) => {
        console.log('Error al eliminar la mascota', err);
      }
    });
  }

  agregarMascota(): void {
    if (this.mascotaForm.valid) {  
      const nuevaMascota: Mascota = this.mascotaForm.value; 
      this.mascotasService.agregarMascota(nuevaMascota).subscribe({
        next: () => {
          this.cargarMascotas();
          this.mascotaForm.reset(); 
        },
        error: (err) => {
          console.log("Error al agregar la mascota", err);
        }
      });
    } else {
      console.log("El formulario no es válido.");
    }
  }
}
