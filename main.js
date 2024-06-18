let pesosArgentinosDolar = 1300;
let pesosArgentinosEuro = 1391;
let pesosArgentinosLibra = 1583;

function solicitarNombre() {
    let nombre = (prompt("Ingrese su nombre"));
    alert("¡Bienvenido " + nombre + " a su conversor de monedas online!");
}
//Invocar función
solicitarNombre();
let entrada = prompt("Ingresar moneda a intercambiar: \nElegir numero: \n1: Dólar \n2: Euro \n3: Libra Esterlina ");
let monedaCambio = prompt("Cantidad a intercambiar")

let askAgain = true;

do {
    switch (entrada) {
        case "1":
            alert(monedaCambio+ " dólar/es " + "= " + monedaCambio * pesosArgentinosDolar + " Pesos Argentinos");
            break;
        case "2":
            alert(cambio+ " Euro/s " + "= " + cambio * pesosArgentinosEuro + " Pesos Argentinos");
            break;
        case "3":
            alert(cambio+ " Libra/s Esterlinas " + "= " + cambio * pesosArgentinosLibra + " Pesos Argentinos");
            break;
        default:
            alert("¡Dato Incorrecto!");
            break;   
    }
    askAgain= false 

} while (askAgain);



