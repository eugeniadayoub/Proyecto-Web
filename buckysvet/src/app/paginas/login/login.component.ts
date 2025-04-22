import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cedula: number = 0;
  password: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  iniciarSesion(): void {
    const params = new HttpParams()
      .set('cedula', this.cedula.toString())
      .set('password', this.password);

    this.http.post<any>('http://localhost:8090/login/login', null, { params, withCredentials: true })
      .subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.router.navigate(['/mascotas', this.cedula]);
          } else {
            this.mensaje = res.message || 'Credenciales incorrectas';
          }
        },
        error: (err) => {
          console.error(err);
          this.mensaje = 'Error al intentar iniciar sesión.';
        }
      });
  }
}
