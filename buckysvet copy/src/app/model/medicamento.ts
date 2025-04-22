import { Tratamiento } from "./tratamiento";

export interface Medicamento {
    idMedicamento: number;
    nombre: string;
    precioCompra: number;
    precioVenta: number;
    unidadesDisponibles: number;
    unidadesVendidas: number;
    tratamiento?: Tratamiento;
}

