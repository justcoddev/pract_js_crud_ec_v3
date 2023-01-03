class Producto {
  constructor(idProducto, nombre, precioBase, consumoE, peso, color) {
    this.idproducto = idProducto;
    this.nombre = nombre;
    this.precioBase = precioBase;
    this.consumoE = consumoE;
    this.peso = peso;
    this.color = color;
  }

  get IdProducto() {
    return this.idproducto;
  }
  set IdProducto(idproducto) {
    this.idproducto = idproducto;
  }
  get Nombre() {
    return this.nombre;
  }
  set Nombre(nombre) {
    this.nombre = nombre;
  }

  get precioBase() {
    return this.precioBase;
  }
  set precioBase(precioBase) {
    this.precioBase = precioBase;
  }

  get ConsumoE() {
    return this.consumoE;
  }
  set ConsumoE(consumoE) {
    this.consumoE = consumoE;
  }

  get Peso() {
    return this.peso;
  }
  set Peso(peso) {
    this.peso = peso;
  }

  get Color() {
    return this.color;
  }
  set Color(color) {
    this.color = color;
  }
}