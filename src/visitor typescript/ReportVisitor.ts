import { SeguroVida } from "./Seguros/Seguro_Vida";
import { SeguroJubilacion } from "./Seguros/Seguro_Jubilacion";
import { SeguroRobo } from "./Seguros/Seguro_Robo";
import { CalculateSeguro, VisitorSeguros } from "./VisitorSeguros";
import { ISeguros } from "./Seguros/ISeguros";

export class ReportVisitor implements VisitorSeguros {

  public visit(_seguro: SeguroVida): CalculateSeguro;
  public visit(_seguro: SeguroRobo): CalculateSeguro;
  public visit(_seguro: SeguroJubilacion): CalculateSeguro;
  public visit(_seguro: ISeguros): CalculateSeguro {

    const valor = _seguro.calcularSeguro();

    let nombre = '';
    if (_seguro instanceof SeguroVida)
      nombre = 'Seguro de vida';

    if (_seguro instanceof SeguroRobo)
      nombre = 'Seguro de robo';

    if (_seguro instanceof SeguroJubilacion)
      nombre = 'Seguro de jubilacion';


    return {
      nombre,
      valor
    }
  }

}
