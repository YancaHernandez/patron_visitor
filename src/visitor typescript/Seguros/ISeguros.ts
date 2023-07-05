import { CalculateSeguro, VisitorSeguros } from "../VisitorSeguros";

export interface ISeguros {
  calcularSeguro: () => number;
  accept: (visitorSeguros: VisitorSeguros) => CalculateSeguro;
}
