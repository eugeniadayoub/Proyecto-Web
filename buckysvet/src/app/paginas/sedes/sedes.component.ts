import { Component } from '@angular/core';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent {
  sedeNorteVisible = false;
  sedeCentroVisible = false;

  toggleSede(sede: string): void {
    if (sede === 'norte') {
      this.sedeNorteVisible = !this.sedeNorteVisible;
    } else if (sede === 'centro') {
      this.sedeCentroVisible = !this.sedeCentroVisible;
    }
  }
}
