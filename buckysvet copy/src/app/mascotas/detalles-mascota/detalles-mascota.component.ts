import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from '../../service/mascotas.service';
import { Mascota } from '../../model/mascota';  // Asegúrate de tener este modelo importado

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrls: ['./detalles-mascota.component.css']
})
export class DetallesMascotaComponent implements OnInit {
  mascota: Mascota | null = null;
  loading: boolean = true; // Indicador de carga
  error: string | null = null; // Mensaje de error

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotasService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    this.mascotaService.obtenerPorId(id).subscribe({
      next: (mascota) => {
        this.mascota = mascota;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener la mascota', err);
        this.error = 'No se pudo obtener la mascota. Intenta nuevamente más tarde.';
        this.loading = false;
      }
    });
  }
}
