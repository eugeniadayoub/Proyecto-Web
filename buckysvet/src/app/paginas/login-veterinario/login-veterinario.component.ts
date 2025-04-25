import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/model/veterinario';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {
  cedula: number = 0;
  contrasena: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion(): void {
    const params = new HttpParams()
      .set('cedula', this.cedula.toString())
      .set('contrasena', this.contrasena);

    this.http.post<Veterinario>('http://localhost:8090/login-veterinario', null, { params, withCredentials: true })
      .subscribe({
        next: (res) => {
          console.log("Respuesta:", res);
          if (res != null) {
            // Redirigir a una página para veterinarios
            this.router.navigate(['/veterinario-dashboard', res.id]);
          } else {
            this.mensaje = 'Credenciales incorrectas';
          }
        },
        error: (err) => {
          console.error(err);
          this.mensaje = 'Error al intentar iniciar sesión.';
        }
      });
  }
} 