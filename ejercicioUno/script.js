function ejercicioUno() {
  var x = parseInt(window.prompt("Inserta un número entero: ")); //se añade el parseInt() dentro de la propia variable para convertir las cadenas de caracteres en números enteros y que actúen como tal. La conversión se guarda dentro de la variable directamente
  var z = parseInt(window.prompt("Inserta un número entero: "));
  var y = parseInt(window.prompt("Inserta un número entero: "));
  if (x <= z && x <= y) {
    alert("El número menor es " + x);
  } else if (z <= x && z <= y) {
    alert("El número menor es " + z);
  } else {
    alert("El número menor es " + y);
  }
}

var ejercicioDos = function daIgual() {
  var frase = window.prompt("Inserta una frase: ");
  var letra = window.prompt("Inserta una letra: ");

  var longitud = frase.length; //variable que actúa como contador. Se inicializa a cero porque es el elemento neutro (primero asumimos que no está la letra que buscamos y luego empieza a sumar)

  var veces = 0;

  for (let i = 0; i < longitud; i = i + 1) {
    if (frase[i] == letra) {
      veces = veces + 1; //veces++
    }
  } //elegimos el bucle for porque queremos que recorra la frase un numero de veces fijo (el largo completo de la frase)

  alert("tu frase tiene " + veces + " veces la letra " + letra);
};

var ejerciciotres = (function () {
    var num1 = parseInt(prompt("Introduce un numero"));
  //num1 = parseInt(num1);
  var num2 = parseInt(prompt("Introduce otro número"));
  //num2 = parseInt(num2);
  var operacion = prompt("Introduce + o -");
  var resultado;

  if (operacion == "+") {
    resultado = num1 + num2;
  } else {
    resultado = num1 - num2;
  }

  alert(resultado);

//   alert(ejercicioTres);
})();


function ejercicioCuatro () {
    var user = "perro";
    var pass = "sanche";
    
    var UsuarioUser; //= prompt("Introduce tu usuario");
    var UsuarioPass; //= prompt("Introduce tu pass")
    
    var intentos = 0
    
    do {
        UsuarioUser = prompt("Introduce tu usuario");
         UsuarioPass = prompt("Introduce tu pass");
        intentos++;
    } while ( (user !== UsuarioUser || pass !== UsuarioPass) && intentos < 3);
    
    if (intentos < 3) { alert("Bienvenido") }
    else { alert("Has agotado tus intentos") }
};


(ejercicioCuatro) => {
    alert(ejercicioCuatro);
};


function ejercicioCinco() {
    var letra = prompt("Escribe una letra: ");

    switch (letra) {
        case "a": alert(7);
        break;
        case "b": alert(9);
        break;
        case "c": alert(101);
        break;
        default: alert("Te has equivocado de letra :(");
    }
}

function ejercicioSeis() {
    var lista = ["Perro", "Gato", "Mono", "Araña", "León", "Tigre", "Rata"];

var listaLength = lista.length
for (let i = listaLength - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if (lista[j] > lista[j + 1]) {
            let temp = lista[j]
            lista[j] = lista[j + 1]
            lista[j + 1] = temp
        }
        // console.log(lista)
    }
    // console.log("-------")
}
console.log("La lista ordenada es: "+lista);
}


