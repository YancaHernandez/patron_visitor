import { ISeguros } from "./ISeguros";
import { CalculateSeguro, VisitorSeguros } from "../VisitorSeguros";

export class SeguroJubilacion implements ISeguros {
  public calcularSeguro() {
    return 500;
  }

  public accept(visitorSeguros: VisitorSeguros): CalculateSeguro {
    return visitorSeguros.visit(this);
  }
}
