window.addEventListener("load", () =>{
    const display = document.querySelector(".calculator-display");
    const buttons = document.getElementsByClassName("keypad-button");
    const buttonsArray = Array.from(buttons)
    buttonsArray.forEach((button)=>{
        button.onclick = () => {
            calculadora(button, display)
        }
    })
})
function calculadora(button,display) {
    switch(button.value){
        case"C": borrar(display);
        break;
        case "=": calcular(display);
        break;
        default: actualizarDisplay(button,display);
        break; 
    }
}
function calcular (display){
    display.innerHTML = eval(display.innerHTML)
}
function eliminar (display){
    display.innerHTML = "0"
}
function actualizarDisplay(button,display){
    if(display.innerHTML === "0"){
        display.innerHTML = ""
    }
    display.innerHTML += button.innerHTML

}
function borrar (display){
    display.innerHTML = "0"
}

