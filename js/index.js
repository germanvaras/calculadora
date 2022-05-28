const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")
const borrar = document.getElementById ("borrar")
const borrarTodo = document.getElementById("borrar-todo")

const display = new Display(displayValorAnterior, displayValorActual);

borrar.onclick = () =>{
    display.borrar()
}
borrarTodo.onclick = () =>{
    display.borrarTodo()
}

botonesNumeros.forEach( boton =>{
    boton.onclick = () =>{
        display.agregarNumero(boton.innerHTML)
        
    }
});

botonesOperadores.forEach( boton =>{
    boton.onclick = () =>{
        display.computar(boton.value)
    }
});
