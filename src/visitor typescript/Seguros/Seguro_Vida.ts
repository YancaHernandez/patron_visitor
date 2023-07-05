import { CalculateSeguro, VisitorSeguros } from "../VisitorSeguros";
import { ISeguros } from "./ISeguros";

export class SeguroVida implements ISeguros {

  public calcularSeguro() {
    return 250;
  }

  public accept(visitorSeguros: VisitorSeguros): CalculateSeguro {
    return visitorSeguros.visit(this);
  }
}
