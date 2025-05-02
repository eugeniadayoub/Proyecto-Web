import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../model/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  private apiUrl = 'http://localhost:8090/tratamientos'; 

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
    return this.http.put<Tratamiento>(`${this.apiUrl}/${tratamiento.id}`, tratamiento);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  obtenerCantidadTratamientosUltimoMes(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/ultimo-mes/total`);
  }

  obtenerTratamientosPorMedicamentoUltimoMes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ultimo-mes/por-medicamento`);
  }

  obtenerTop3TratamientosMasVendidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/top3-vendidos`);
  }
  
}
