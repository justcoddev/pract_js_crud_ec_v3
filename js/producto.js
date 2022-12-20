class Producto {
  constructor(idProducto, nombre, cantidad, precio) {
    this.idproducto = idProducto;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
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

  get Cantidad() {
    return this.cantidad;
  }
  set Cantidad(cantidad) {
    this.cantidad = cantidad;
  }
  get Precio() {
    return this.precio;
  }
  set Precio(precio) {
    this.precio = precio;
  }
}