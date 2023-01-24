// Programa que el usuario ingresa 2 numeros y el sistema menciona cual es mayor, cual es menor o si son iguales

var num1 = parseInt(prompt("Ingrese el primer valor"));
var num2 = parseInt(prompt("Ingrese el segundo valor"));

if(typeof(num1) == Number ||  typeof(num2) == Number ){
    if (num1 > num2){
        console.log("El primer número es mayor")
    }else if(num2 > num1){
        console.log("El segundo número es mayor")
    
    }else{
        console.log("Los dos númweros son iguales");
    }

}else{
    console.log("Ingrese números válidos");
}
