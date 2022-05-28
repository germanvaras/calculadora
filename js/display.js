class Display {
    constructor(displayValorAnterior, displayValorActual){
       this.displayValorActual = displayValorActual
       this.displayValorAnterior = displayValorAnterior
       this.tipoOperacion = undefined
       this.calculador = new Calculadora()
       this.valorActual = ""
       this.valorAnterior = ""
       this.signos = {
        sumar: '+',
        dividir: '%',
        multiplicar: 'x',
        restar: '-', 
        }
    }
   

    borrar(){
        this.valorActual = this.valorActual.slice(0,-1)
        this.imprimirValores()
    }
    borrarTodo(){
        this.valorActual = ""
        this.valorAnterior = ""
        this.tipoDeOperacion = undefined
        this.imprimirValores()
    }
    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular()
        this.tipoOperacion = tipo
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = ""
        this.imprimirValores()
    }
    


    agregarNumero(numero){
        if (numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString()
        this.imprimirValores()
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    calcular(){
        const valorActual = parseFloat(this.valorActual)  
        const valorAnterior = parseFloat(this.valorAnterior)  
        if(isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual)
      }
}