import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuenosService } from 'src/app/service/duenos.service';
import { MascotasService } from 'src/app/service/mascotas.service';
import { Dueno } from 'src/app/model/dueno';
import { Mascota } from 'src/app/model/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duenosmascotas',
  templateUrl: './duenosmascotas.component.html',
  styleUrls: ['./duenosmascotas.component.css']
})
export class DuenosmascotasComponent implements OnInit {
  dueno: Dueno | null = null;
  mascotas: Mascota[] = [];

  constructor(
    private route: ActivatedRoute,
    private duenosService: DuenosService,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const idDueno = parseInt(id, 10);

      // Obtener información del dueño
      this.duenosService.obtenerPorId(idDueno).subscribe({
        next: (data) => this.dueno = data,
        error: (err) => console.error('Error al obtener el dueño', err)
      });

      // Obtener mascotas del dueño
      this.mascotasService.obtenerMascotasPorDuenoId(idDueno).subscribe({
        next: (data) => this.mascotas = data,
        error: (err) => console.error('Error al obtener mascotas', err)
      });
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login/dueno']);
  }

  verDetallesMascota(mascota: Mascota): void {
    if (this.dueno) {
      this.router.navigate(['/detalle-mascota', mascota.mascotaId], {
        queryParams: {
          origen: 'dueno',
          duenoId: this.dueno.id
        }
      });
    }
  }
  
}

