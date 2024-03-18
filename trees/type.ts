export class Arbol {
  valor: number
  izquierdo: Arbol | null
  derecho: Arbol | null

  constructor(valor: number) {
    this.valor = valor
    this.izquierdo = null
    this.derecho = null
  }
}