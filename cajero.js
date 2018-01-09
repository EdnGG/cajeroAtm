// Declaracion de variables

var div = 0;
var papeles = 0;
var total = 0;

//declaracion de la clase Billete
class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;

    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var imagenes = [];

imagenes["1"] = "1dollar.jpeg";
imagenes["5"] = "5dollar.jpeg";
imagenes["10"] = "10dollar.jpeg";
imagenes["20"] = "20dollars.jpeg";
imagenes["50"] = "50dollars.jpeg";
imagenes["100"] = "100dollars.jpeg";
imagenes["1000000"] = "milliondollars.jpeg";



function saldo() {
  var monto = 0;
  for (var v of caja) {
    monto += v.valor * v.cantidad;
    //monto = monto + v.valor * v.cantidad;
    total = monto;
    resultado.innerHTML = "Su saldo es: $"+ monto + "<hr />";
  }
}
//actualiza el saldo despues de depositar
function actualizar() {
  var saldo = 0;
  for (var v of caja) {
    saldo += v.valor * v.cantidad;
    total = saldo;
  }
}

function deposito() {
  var monto = prompt("Por favor indique el valor a depositar de $: 100, 50, 20, 10, o 5 ");
if ( monto == 100 || monto == 50 || monto == 20 || monto == 10 || monto == 5 || monto == 1) {

   if (monto == 100) {

     var cant_cien = prompt("Indíque la cantidad", 1);

     while (isNaN(cant_cien)) {
       cant_cien = prompt(cant_cien + " No es un valor correcto, Por favor indíque un valor");
     }

     caja[0].cantidad = caja[0].cantidad + parseInt(cant_cien);
     actualizar();
     resultado.innerHTML += "Se ha depositado " + cant_cien + " Billetes de: $  " + monto   + "<img src=" + e.imagen.src + " />" + "<hr />";

    }

    if (monto == 50) {
      var cant_cincuenta = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cincuenta)) {
        cant_cincuenta = prompt(cant_cincuenta + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[1].cantidad = caja[1].cantidad + parseInt(cant_cincuenta);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_cincuenta + " Billetes de: $" + monto   + "<img src=" + e.imagen.src + " />" +"<hr />";
    }

    if (monto == 20) {
      var cant_veinte = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_veinte)) {
        cant_veinte = prompt(cant_veinte + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[2].cantidad = caja[2].cantidad + parseInt(cant_veinte);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_veinte + " Billetes de: $" + monto   +  "<img src=" + e.imagen.src + " />"+ "<hr />";
    }

    if (monto == 10) {
      var cant_diez = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_diez)) {
        cant_diez = prompt(cant_diez + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[3].cantidad = caja[3].cantidad + parseInt(cant_diez);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_diez + " Billetes de: $" + monto   + "<img src=" + e.imagen.src + " />" + "<hr />";
    }

    if (monto == 5) {
      var cant_cinco = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cinco)) {
        cant_cinco = prompt(cant_cinco + " No es un valor correcto, Por favor indíque un valor");
    }

    caja[4].cantidad = caja[4].cantidad + parseInt(cant_cinco);
    actualizar();
    resultado.innerHTML += "Se ha depositado " + cant_cinco + " Billetes de: $" + monto   +  "<img src=" + e.imagen.src + " />"+ "<hr />";
    }

    if (monto == 1) {
      var cant_uno = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_uno)) {
        cant_uno = prompt(cant_uno + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[5].cantidad = caja[5].cantidad + parseInt(cant_uno);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_uno + " Billetes de: $" + monto   +  "<img src=" + e.imagen.src + " />"+ "<hr />";
    }
    if (monto == 1000000) {
      var cant_million = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_million)) {
        cant_million = prompt(cant_million + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[6].cantidad = caja[6].cantidad + parseInt(cant_million);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_million + " Billetes de: $" + monto  + "<img src=" + e.imagen.src + " />" + "<hr />";
    }
  }
 else{
   resultado.innerHTML =("Valor no valido" + "<hr />");
  }

}

var del = document.getElementById("borrar");
del.addEventListener("click", borra);
//Esta funciona hace que cuando apretas el boton "Borrar" se borra el resultado y billetes entregados
function borra () {
   resultado.innerHTML = "";
    entregado = [];
}

function contador() {
	total = 0;
	for (var t of caja) {
		total += t.valor * t.cantidad;
  }
}


var ret = document.getElementById("extraer");
ret.addEventListener("click", entregarDinero);

function entregarDinero() {

  /*Enlazando el TextBox, guardandolo en una variable
  y transformando su valor a Entero
  La variable dinero se refiere al valor monetario que el usuario
  desea adquirir desde el ATM */

  //var t = document.getElementById("extraer");
  var dinero = parseInt(prompt('Elije la cantidad de dinero a retirar'));//
  //var dinero = parseInt(input.value);

  var mostrado = [];

    //var t = document.getElementById("dinero");


    if (dinero <= 0) {
        resultado.innerHTML += "No hay billetes para esa cantidad, intenta otro valor! <hr />";
    } else {

/*Empieza el algoritmo
si dinero es > a 0, dinero va a ser dividido por el valor del billete
de mas grande denominacion con el que cuente el ATM */

    for(var bi of caja) {
      if(dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
  //
        entregado.push( new Billete(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
        }
      }
    }
//

  if(dinero > 0) {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  } else {

    for(var e of entregado) {
      if(e.cantidad > 0) {
              resultado.innerHTML += e.cantidad + " billetes de $  " + e.valor   + "<img src=" + e.imagen.src + " />" + "<br />";
      }
    }
  }
}
//en este arreglo se guardan los billetes que ha entregado el ATM
var entregado = [];
//Este arreglo tiene la cantidad de billetes con la que cuenta el ATM
var caja = [];
caja.push( new Billete(100, 100) );
caja.push( new Billete(50, 50) );
caja.push( new Billete(20, 50) );
caja.push( new Billete(10, 50) );
caja.push( new Billete(5, 50) );
caja.push( new Billete(1, 50) );
caja.push( new Billete(1000000, 5) );

var resultado = document.getElementById("resultado");


var boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);

var boton_depositar = document.getElementById("depositar");
boton_depositar.addEventListener("click", deposito);
