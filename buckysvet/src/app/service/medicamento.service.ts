import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../model/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private apiUrl = 'http://localhost:8090/api/medicamentos';  // URL de tu API REST

  constructor(private http: HttpClient) { }

  // Obtener todos los medicamentos
  obtenerTodos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.apiUrl);
  }

  // Obtener un medicamento por su ID
  obtenerPorId(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.apiUrl}/${id}`);
  }

  // Guardar un nuevo medicamento
  guardar(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(this.apiUrl, medicamento);
  }

  // Actualizar un medicamento existente
  actualizar(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(`${this.apiUrl}/${medicamento.id}`, medicamento);
  }

  // Eliminar un medicamento por su ID
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener las ventas totales de medicamentos
  obtenerVentasTotales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/ventas-totales`);
  }  

  obtenerGananciasTotales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/ganancias-totales`);
  }

  obtenerGananciasPorMedicamento(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ganancias-por-medicamento`);
  }
  
  
}
