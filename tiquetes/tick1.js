let operandoPorCategoria='';
var total= 0;
let precioTick=200;
let ticks=0;
function calcular(){
ticks = document.getElementById("cantidad").value;
operandoPorCategoria = document.getElementById("categoria").value;
total= (ticks * precioTick) * operandoPorCategoria;
console.log("la cantidad de tickets es: " + ticks);
console.log("su categoria es " + operandoPorCategoria);


if (operandoPorCategoria == "1")
{
total = (ticks * precioTick) * 0.20;
};
if (operandoPorCategoria == "2")
{
total = (ticks * precioTick) * 0.50;
};
if (operandoPorCategoria == "3")
{
total = (ticks * precioTick) * 0.85;
};

console.log("total a pagar : " + total)
document.getElementById("totalAPagar").value= "el total a pagar es de: $" + total
}






