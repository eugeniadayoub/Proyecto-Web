import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../model/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  private apiUrl = 'http://localhost:8090/api/tratamientos'; 

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Tratamiento> {
    return this.http.get<Tratamiento>(`${this.apiUrl}/${id}`);
  }

  guardar(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>(this.apiUrl, tratamiento);
  }

  actualizar(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.put<Tratamiento>(`${this.apiUrl}/${tratamiento.idTratamiento}`, tratamiento);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
