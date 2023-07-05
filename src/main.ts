import './style.css'
import { setupCalcularTotal } from './reporte.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Reporte de seguros</h1>
    <div class="card">
      <p>Seleccione los seguros que desea contratar</p>
      <label><input type="checkbox" id="vida" value="vida"> Seguro de vida</label><br>
      <label><input type="checkbox" id="jubilacion" value="jubilacion"> Seguro de jubilacion</label><br>
      <label><input type="checkbox" id="robo" value="robo"> Seguro de robo</label><br>
      <br>
      <button id="btnGenerarReporte" type="button">
        Calcular costo
      </button>
    </div>
    <div id="reporte"></div>
  </div>
`
const inputs = [
  document.querySelector<HTMLInputElement>('#vida')!,
  document.querySelector<HTMLInputElement>('#jubilacion')!,
  document.querySelector<HTMLInputElement>('#robo')!,
]
setupCalcularTotal(document.querySelector<HTMLButtonElement>('#btnGenerarReporte')!, document.querySelector<HTMLButtonElement>('#reporte')!, inputs)
