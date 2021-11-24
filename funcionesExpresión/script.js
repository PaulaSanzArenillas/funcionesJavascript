//  const/var nombre = function [nombreF]([param]){codigo}

    const sumar = function suma(n1, n2){ return n1 + n2; }
    console.log(sumar(3,4));
    // console.log(suma(3,4)); -> Error suma no es accesible por sí misma, sin usar la constante sumar
    var restar = function(n1, n2){ return n1 - n2; } //Con una función anónima, sin nombre
    console.log(restar(3,4));



