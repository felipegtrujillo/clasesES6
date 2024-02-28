export class Impuestos {

  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(new_monto) {
    this._montoBrutoAnual = new_monto;
  }

  get deducciones() {
    return this._deducciones;
  }
  set deducciones(new_deducciones) {
    this._deducciones = new_deducciones;
  }
}
