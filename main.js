let pesosArgentinos = 1;
let dolar = 1305;
let euro = 1391;
let libraEsterlina = 1583;

function solicitarNombre() {
    let nombre = (prompt("Ingrese su nombre"));
    alert("¡Bienvenido " + nombre + " a su conversor de monedas online!");
}
//Invocar función
solicitarNombre();
let cambio = prompt("Ingrese cantidad de Pesos Argentinos a intercambiar");
let entrada = prompt("Ingresar moneda a intercambiar: \n1: Dólar \n2: Euro \n3: Libra Esterlina ");

let askAgain = true;

do {
    switch (entrada) {
        case "1":
            alert(cambio+ " peso/s " + "= " + cambio * dolar + " Dólares");
            break;
        case "2":
            alert(cambio+ " peso/s " + "= " + cambio * dolar + " Euros");
            break;
        case "3":
            alert(cambio+ " peso/s " + "= " + cambio * dolar + " Libras Esterlinas");
            break;
        default:
            alert("¡Dato Incorrecto!");
            break;   
    }
    askAgain= false 

} while (askAgain);



