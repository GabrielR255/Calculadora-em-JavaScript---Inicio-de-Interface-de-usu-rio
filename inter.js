function calculate(){
    var altura= document.getElementById("altura").value/100;
    var peso= document.getElementById("peso").value;

var imc=peso / altura ** 2;
var text=""
if (imc < 18.5) {
    text="Você está seu peso Ideal"
  } else if (imc < 24.9) {
    text="Você está relativamente bem!"
  } else if (imc < 29.9) {
    text="Você está acima do peso médio"
  } else if (imc < 39.9) {
    text="Cuidado, você está com o seu peso alto!"
  } else if (imc > 39.9) {
    text="Tome cuidado, você está com obesidade morbida!"
  }

  document.getElementById("minha_area").innerText=text

}
