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
        const listSeguros: ISeguros[] = [];

        seguros.vida && listSeguros.push(new SeguroVida());
        seguros.jubilacion && listSeguros.push(new SeguroJubilacion());
        seguros.robo && listSeguros.push(new SeguroRobo());

        return listSeguros.map(seguro => seguro.accept(new ReportVisitor()));
    }

}
