function DNI  (numero1) //Es una funcion constructora que crea instancias
{
    this.numero = numero1;
}

DNI.prototype =
{
    calcularletra : function ()
    {
        var letra = '';
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

        letra = SECUENCIA_DNI.charAt(this.numero%23);

        return letra;
    }
}
//Defino un método estático
DNI.esValido = function (cadena)
{
    var valido = false;
    var validar = cadena;

    if ( validar > 0 && validar <= 99999999 )
    {
        valido = true;
    }else{
        valido =false;
    }

    return valido;
}

var dni = new DNI (1576);

console.log (dni.numero);
console.log ("proto dni");
console.log (dni.__proto__);
var letra = dni.calcularletra();
console.log (letra);
console.log(DNI.esValido (5076));




/*
var micadena = new String ("vale");
console.log (micadena);
console.log (micadena.toString());
console.log (micadena.valueOf());
var micadenaMayus = micadena.toLocaleUpperCase();
console.log (micadenaMayus);
var n_aleatorio = Math.random();
console.log (n_aleatorio);
*/