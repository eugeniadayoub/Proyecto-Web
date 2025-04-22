import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DuenosService } from '../../service/duenos.service';
import { Dueno } from '../../model/dueno';

@Component({
  selector: 'app-detalles-dueno',
  templateUrl: './detalles-dueno.component.html',
  styleUrls: ['./detalles-dueno.component.css']
})
export class DetallesDuenoComponent {
  dueno?: Dueno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private duenoService: DuenosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.duenoService.obtenerPorId(id).subscribe({
      next: (dueno) => {
        this.dueno = dueno;
      },
      error: () => {
        alert('Dueño no encontrado');
        this.router.navigate(['/duenos']);
      }
    });
  }
  

  volver(): void {
    this.router.navigate(['/duenos']);
  }
}
