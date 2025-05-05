import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotasService } from '../../service/mascotas.service';
import { Mascota } from '../../model/mascota';
import { VeterinarioService } from 'src/app/service/veterinario.service';  // Asegúrate de tener este servicio
import { Veterinario } from 'src/app/model/veterinario';                   // Y este modelo

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {
  listaVeterinarios: Veterinario[] = [];

  constructor(
    private router: Router,
    private mascotaService: MascotasService,
    private veterinarioService: VeterinarioService
  ) {}

  ngOnInit(): void {
    this.veterinarioService.obtenerTodos().subscribe({
      next: (vets) => this.listaVeterinarios = vets,
      error: (err) => console.error('Error al obtener veterinarios', err)
    });
  }

  onSubmit(mascota: Mascota): void {
    this.mascotaService.agregarMascota(mascota).subscribe({
      next: () => {
        this.router.navigate(['/mascotas']);
      },
      error: (err) => {
        console.error('Error al agregar la mascota', err);
      }
    });
  }
  

  onCancelar(): void {
    this.router.navigate(['/mascotas']);
  }
}
