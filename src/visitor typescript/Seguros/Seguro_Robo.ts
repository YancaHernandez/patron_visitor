import { CalculateSeguro } from './../VisitorSeguros';
import { VisitorSeguros } from "../VisitorSeguros";
import { ISeguros } from "./ISeguros";

export class Seguro_Robo implements ISeguros {
  public calcularSeguro() {
    return 100;
  }

  public accept(visitorSeguros: VisitorSeguros): CalculateSeguro {
    return visitorSeguros.visitor(this);
  }
}
