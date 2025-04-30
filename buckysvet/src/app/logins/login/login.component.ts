import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cedula: number = 0;  
  password: string = '';  
  mensaje: string = ''; 
  usuario: string = '';  
  tipoUsuario: string = ''; 

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario') || '';  
    console.log('Tipo de usuario:', this.tipoUsuario);
  }

  iniciarSesion() {
    this.mensaje = ''; 

    console.log('Usuario:', this.usuario); 
    console.log('Cédula:', this.cedula);
    console.log('Tipo de usuario:', this.tipoUsuario);

    if (this.isAdmin()) {
      console.log('Iniciando sesión como administrador');
      this.loginAdmin(); 
    } else if (this.isVeterinario()) {
      console.log('Iniciando sesión como veterinario');
      this.loginVeterinario();  
    } else if (this.isDueno()) {
      console.log('Iniciando sesión como dueño');
      this.loginDueno();  
    } else {
      this.mensaje = 'Por favor, ingrese una cédula válida.';
    }
  }

  isAdmin(): boolean {
    return this.tipoUsuario === 'admin';  
  }

  isVeterinario(): boolean {
    return this.tipoUsuario === 'veterinario';
  }

  isDueno(): boolean {
    return this.tipoUsuario === 'duenos';  
  }

  loginDueno(): void {
    const params = new HttpParams()
      .set('cedula', this.cedula.toString())
      .set('password', this.password);
    
    this.http.post<any>('http://localhost:8090/login/dueno', null, { params, withCredentials: true })
      .subscribe({
        next: (res) => {
          console.log("Respuesta:", res);
          if (res.status === 'success') {
            // Verificar que la redirección contenga un ID
            const redirectUrl = res.redirectUrl;
            if (redirectUrl && redirectUrl.includes('/duenosmascotas/')) {
              const ownerId = redirectUrl.split('/duenosmascotas/')[1];
              if (ownerId) {
                this.router.navigate([`/duenosmascotas`, ownerId]);  // Redirigir correctamente al dueño
              } else {
                this.mensaje = 'ID de dueño no válido.';
              }
            } else {
              this.mensaje = 'URL de redirección no válida.';
            }
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
  
  loginVeterinario(): void {
    const params = new HttpParams()
      .set('cedula', this.cedula.toString())
      .set('password', this.password);
  
    this.http.post<any>('http://localhost:8090/login/veterinario', null, { params, withCredentials: true })
      .subscribe({
        next: (res) => {
          console.log("Respuesta completa del login:", res);
  
          if (res.status === 'success') {
            const redirectUrl = res.redirectUrl;
  
            if (redirectUrl && redirectUrl.includes('/veterinario-dashboard/')) {
              const idPart = redirectUrl.split('/veterinario-dashboard/')[1];
              const id = parseInt(idPart, 10);
  
              if (!isNaN(id)) {
                // ✅ Aquí se guarda correctamente
                localStorage.setItem('veterinarioId', id.toString());
                console.log('Veterinario ID guardado en localStorage:', id);
  
                this.router.navigate(['/veterinario-dashboard', id]);
              } else {
                console.error('No se pudo extraer el ID del veterinario de la URL.');
              }
            } else {
              console.error('URL de redirección inválida o sin ID de veterinario.');
            }
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

  loginAdmin(): void {
    // Asegúrate de enviar los parámetros correctos en HttpParams
    const params = new HttpParams()
      .set('usuario', 'admin')    // Usuario predefinido para el admin
      .set('password', 'admin123');  // Contraseña predefinida para el admin
  
    // Realizamos la solicitud POST para el administrador
    this.http.post<any>('http://localhost:8090/login/admin', null, { params, withCredentials: true })
      .subscribe({
        next: (res) => {
          console.log("Respuesta:", res);
          if (res.status === 'success') {
            this.router.navigate(['/veterinarios']);  // Redirigir al dashboard de administrador
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
