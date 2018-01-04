// Declaracion de variables
var dinero = 0;
var div = 0;
var papeles = 0;

//declaracion de la clase Billete
class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {

  /*Enlazando el TextBox, guardandolo en una variable
  y transformando su valor a Entero
  La variable dinero se refiere al valor monetario que el usuario
  desea adquirir desde el ATM */

  //var t = document.getElementById("dinero");
  dinero = parseInt(prompt('Elije la cantidad de dinero a retirar'));

  for(var bi of caja) {

  /*Empieza el algoritmo
  si dinero es > a 0, dinero va a ser dividido por el valor del billete
  de mas grande denominacion con el que cuente el ATM */

  if(dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
  //se agregan
      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }
  }

  if(dinero > 0) {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  } else {

    for(var e of entregado) {
      if(e.cantidad > 0) {
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 20) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
caja.push( new Billete(1, 20) );

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
