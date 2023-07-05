import { Seguro_Vida } from "./Seguros/Seguro_Vida";
import { ReportVisitor } from './ReportVisitor';
import { Seguro_Jubilacion } from "./Seguros/Seguro_Jubilacion";
import { Seguro_Robo } from "./Seguros/Seguro_Robo";
import { ISeguros } from "./Seguros/ISeguros";
import { CalculateSeguro } from "./VisitorSeguros";

interface ObjetSeguros {
    vida?: boolean,
    jubilacion?: boolean,
    robo?: boolean
}

export class Client {
    public run(seguros: ObjetSeguros): CalculateSeguro[] {
        const list: ISeguros[] = [];

        seguros.vida && list.push(new Seguro_Vida());
        seguros.jubilacion && list.push(new Seguro_Jubilacion());
        seguros.robo && list.push(new Seguro_Robo());

        const reportVisitor: ReportVisitor = new ReportVisitor();
        return reportVisitor.calcularTotal(list)
    }

}
