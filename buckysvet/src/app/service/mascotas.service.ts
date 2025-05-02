import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { DuenosService } from './duenos.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private mascotas: Mascota[] = [];
  private apiUrl = 'http://localhost:8090/api/mascotas';

  constructor(private duenoService: DuenosService, private http: HttpClient) {
  }


  obtenerTodas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.apiUrl}/${id}`);
  }

  agregarMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.apiUrl, mascota);
  }

  actualizarMascota(id: number, mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiUrl}/${id}`, mascota);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  obtenerMascotasPorDuenoId(duenoId: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiUrl}/dueno/${duenoId}`);
  }

  obtenerCantidadMascotasTotales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totales`);
  }

  obtenerCantidadMascotasActivas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/activas`);
  }  
  
}