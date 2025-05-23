import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinario } from '../model/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private apiUrl = 'http://localhost:8090/veterinarios';  // URL de tu API REST

  constructor(private http: HttpClient) { }

  // Obtener todos los veterinarios
  obtenerTodos(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.apiUrl);
  }

  // Obtener un veterinario por su ID
  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Guardar un nuevo veterinario
  guardar(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.post<Veterinario>(this.apiUrl, veterinario);
  }

  // Actualizar un veterinario existente
  actualizar(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`${this.apiUrl}/${veterinario.id}`, veterinario);
  }

  // Eliminar un veterinario por su ID
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  obtenerCantidadVeterinariosActivos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/activos/total`);
  }

  obtenerCantidadVeterinariosInactivos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/inactivos/total`);
  }
  
}
