import { Seguro_Vida } from "./Seguros/Seguro_Vida";
import { Seguro_Jubilacion } from "./Seguros/Seguro_Jubilacion";
import { Seguro_Robo } from "./Seguros/Seguro_Robo";
import { ISeguros } from "./Seguros/ISeguros";

export interface CalculateSeguro {
  nombre: string;
  valor: number;
}

export interface VisitorSeguros {
  visitor(lifeInsurance: ISeguros): CalculateSeguro;
}
