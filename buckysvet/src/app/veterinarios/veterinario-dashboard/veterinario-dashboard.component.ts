import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { Veterinario } from 'src/app/model/veterinario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinario-dashboard',
  templateUrl: './veterinario-dashboard.component.html',
  styleUrls: ['./veterinario-dashboard.component.css']
})
export class VeterinarioDashboardComponent implements OnInit {
  veterinarioId: number = 0;
  veterinario: Veterinario | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private veterinarioService: VeterinarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.veterinarioId = +id;
        this.cargarDatosVeterinario();
      }
    });
  }

  cargarDatosVeterinario(): void {
    this.loading = true;
    this.veterinarioService.obtenerPorId(this.veterinarioId)
      .subscribe({
        next: (data) => {
          this.veterinario = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar datos del veterinario', err);
          this.error = 'No se pudieron cargar los datos del veterinario';
          this.loading = false;
        }
      });
  }

  verMascotas(): void {
    this.router.navigate(['/mascotas']);
  }

   verDuenos(): void {
    this.router.navigate(['/duenos']);
  }

  registrarTratamiento(): void {
    this.router.navigate(['/tratamientos']);
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
} 