import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Guardar token en localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Obtener token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== '';
  }

  // Eliminar token (logout)
  removeToken(): void {
    localStorage.removeItem('token');
  }

  // Decodificar el token para obtener información del usuario (opcional)
  getUserFromToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
      } catch (error) {
        console.error('Error decodificando token:', error);
        return null;
      }
    }
    return null;
  }
} 