import { Seguro_Vida } from "./Seguros/Seguro_Vida";
import { Seguro_Jubilacion } from "./Seguros/Seguro_Jubilacion";
import { Seguro_Robo } from "./Seguros/Seguro_Robo";
import { CalculateSeguro, VisitorSeguros } from "./VisitorSeguros";
import { ISeguros } from "./Seguros/ISeguros";

export class ReportVisitor implements VisitorSeguros {
  
  public visitor(_seguro: Seguro_Vida): CalculateSeguro;
  public visitor(_seguro: Seguro_Robo): CalculateSeguro;
  public visitor(_seguro: Seguro_Jubilacion): CalculateSeguro;
  public visitor(_seguro: ISeguros): CalculateSeguro{
    
    const valor = _seguro.calcularSeguro();

    let nombre = '';
    if(_seguro instanceof  Seguro_Vida){
      nombre = 'Seguro de vida';
    }
    if(_seguro instanceof  Seguro_Robo){
      nombre = 'Seguro de robo';
    }
    if(_seguro instanceof  Seguro_Jubilacion){
      nombre = 'Seguro de jubilacion';
    }

    return {
      nombre,
      valor
    }
  }


  public calcularTotal(itemsList: ISeguros[]): CalculateSeguro[] {
    const reports: CalculateSeguro[] = [];
    itemsList.forEach((insurance) => {
      reports.push(insurance.accept(this));
    });
    return reports;
  }
}
