import { ISeguros } from "./ISeguros";
import { CalculateSeguro, VisitorSeguros } from "../VisitorSeguros";

export class Seguro_Jubilacion implements ISeguros {
  public calcularSeguro() {
    return 500;
  }

  public accept(visitorSeguros: VisitorSeguros): CalculateSeguro {
    return visitorSeguros.visitor(this);
  }
}
