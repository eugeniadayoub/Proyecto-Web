import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from '../../service/veterinario.service';
import { Veterinario } from '../../model/veterinario';

@Component({
  selector: 'app-detalles-veterinario',
  templateUrl: './detalles-veterinario.component.html',
  styleUrls: ['./detalles-veterinario.component.css']
})
export class DetallesVeterinarioComponent implements OnInit {
  veterinario?: Veterinario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.veterinarioService.obtenerPorId(id).subscribe({
      next: (veterinario) => {
        this.veterinario = veterinario;
      },
      error: () => {
        alert('Veterinario no encontrado');
        this.router.navigate(['/veterinarios']);
      }
    });
  }

  volver(): void {
    this.router.navigate(['/veterinarios']);
  }
}
