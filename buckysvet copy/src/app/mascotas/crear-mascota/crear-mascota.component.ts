import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from '../../service/mascotas.service';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {
  constructor(
    private router: Router,
    private mascotaService: MascotasService
  ) {}

  ngOnInit(): void {}

  // Método para manejar el submit
  onSubmit(mascota: Mascota): void {
    this.mascotaService.agregarMascota(mascota).subscribe({
      next: () => {
        // Redirigir a la lista de mascotas después de agregarla
        this.router.navigate(['/mascotas']);
      },
      error: (err) => {
        console.error('Error al agregar la mascota', err);
      }
    });
  }

  // Método para cancelar la creación de la mascota y redirigir a la lista de mascotas
  onCancelar(): void {
    this.router.navigate(['/mascotas']);
  }
}
