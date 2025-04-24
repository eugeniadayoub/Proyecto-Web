import { Tratamiento } from "./tratamiento";

export interface Medicamento {
    id: number;
    nombre: string;
    precioCompra: number;
    precioVenta: number;
    unidadesDisponibles: number;
    unidadesVendidas: number;
}

