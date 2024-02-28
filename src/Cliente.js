import { Impuestos } from "./Impuestos.js";

export class Cliente {
  constructor(nombre, montoBruto, deducciones) {
    this.nombre = nombre;
    this.impuestos = new Impuestos(montoBruto, deducciones);
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(new_nombre) {
    this._nombre = new_nombre;
  }

  CalcularImpuestos() {
    let calculo = new Number();
    calculo = (this.impuestos.montoBrutoAnual - this.impuestos.deducciones) * 0.21;
    return (calculo = calculo.toLocaleString("en-US", { style: "currency", currency: "USD",  }));
  }
}
