import { Client } from "./visitor typescript/Client"

export function setupCalcularTotal(element: HTMLButtonElement, elementReporte: HTMLElement, inputs: HTMLInputElement[]) {
  const total = () => {
    let seguros = {};
    inputs.forEach((input) => {
      seguros = {
        ...seguros,
        [input.value]: input.checked,
      };
    });
    const main = new Client();
    const reports = main.run(seguros);
    const reportesElements: string[] = [];

    let totalSeguros = 0;
    reports.forEach((report) => {
      totalSeguros += report.valor;
      reportesElements.push(`<div class="report">El ${report.nombre} tiene un valor de: <span class="value">  $ ${report.valor} </span></div>`);
    });
    reportesElements.push(`<div class="reportTotal">El total de los seguros es: <span class="value"> $ ${totalSeguros} </span></div> `);

    elementReporte.innerHTML = reportesElements.join('<br>');
  }
  element.addEventListener('click', () => total())
}
