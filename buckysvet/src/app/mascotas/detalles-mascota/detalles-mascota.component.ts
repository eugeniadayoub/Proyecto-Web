import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from '../../service/mascotas.service';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-detalles-mascota',
  templateUrl: './detalles-mascota.component.html',
  styleUrls: ['./detalles-mascota.component.css']
})
export class DetallesMascotaComponent implements OnInit {
  mascota: Mascota | null = null;
  loading: boolean = true;
  error: string | null = null;

  // 🆕 Nuevas propiedades
  origen: string | null = null;
  duenoId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotasService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.origen = this.route.snapshot.queryParamMap.get('origen');
    this.duenoId = parseInt(this.route.snapshot.queryParamMap.get('duenoId') || '0', 10);

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

  // 🆕 Botón dinámico para volver
  volver(): void {
    if (this.origen === 'dueno' && this.duenoId > 0) {
      this.router.navigate(['/duenosmascotas', this.duenoId]);
    } else {
      this.router.navigate(['/mascotas']);
    }
  }
}
