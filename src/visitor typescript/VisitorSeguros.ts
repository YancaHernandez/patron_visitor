import { ISeguros } from "./Seguros/ISeguros";

export interface CalculateSeguro {
  nombre: string;
  valor: number;
}

export interface VisitorSeguros {
  visit(_seguro: ISeguros): CalculateSeguro;
}
