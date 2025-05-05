import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from '../../service/mascotas.service';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {
  mascota?: Mascota;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotasService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascotaService.obtenerPorId(id).subscribe({
      next: (mascota) => {
        this.mascota = mascota;
      },
      error: () => {
        alert('Mascota no encontrada');
        this.router.navigate(['/mascotas']);
      }
    });
  }

  onSubmit(mascotaActualizada: Mascota): void {
    if (!this.mascota || this.mascota.mascotaId === undefined) {
      alert('No se puede actualizar la mascota: ID no disponible');
      return;
    }
  
    const mascotaFinal: any = {
      ...mascotaActualizada,
      dueno: { id: mascotaActualizada.idDueno },
      veterinario: mascotaActualizada.idVeterinario
        ? { id: mascotaActualizada.idVeterinario }
        : null
    };
  
    delete mascotaFinal.idDueno;
    delete mascotaFinal.idVeterinario;
  
    this.mascotaService.actualizarMascota(this.mascota.mascotaId, mascotaFinal).subscribe({
      next: () => {
        this.router.navigate(['/mascotas']);
      },
      error: () => {
        alert('Error al actualizar la mascota');
      }
    });
  }  

  onCancelar(): void {
    this.router.navigate(['/mascotas']);
  }
}
