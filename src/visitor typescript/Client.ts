import { SeguroVida } from "./Seguros/Seguro_Vida";
import { ReportVisitor } from './ReportVisitor';
import { SeguroJubilacion } from "./Seguros/Seguro_Jubilacion";
import { SeguroRobo } from "./Seguros/Seguro_Robo";
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

        seguros.vida && list.push(new SeguroVida());
        seguros.jubilacion && list.push(new SeguroJubilacion());
        seguros.robo && list.push(new SeguroRobo());

        const reports: CalculateSeguro[] = [];
        list.forEach(seguro => reports.push(seguro.accept(new ReportVisitor())));
        return reports
    }

}
