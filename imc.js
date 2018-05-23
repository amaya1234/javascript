//Definir un constructor de persona con los atributos necesarios para poder usarlo en el ejemplo del 3imc.html
function Persona (peso,altura)
{
    this.peso = peso;
    this.altura = altura;
}
Persona.prototype=
{
    calcularIMC_n : function ()
    {
        var imc = 0;
            imc = this.peso / (this.altura * this.altura);
        return imc;
    },
    calcularIMC_l : function ()
    {
        var imc_l ="";
        var imc_n = this.calcularIMC_n();

            if (imc_n < 16) {
                var imc_l = 'DESNUTRIDO';
            } else {
                if (imc_n >= 16 && imc_n < 18) {
                    var imc_l = 'DELGADO';
                } else {
                    if (imc_n >= 18 && imc_n < 25) {
                        var imc_l = 'IDEAL';
                    } else {
                        if (imc_n >= 25 && imc_n < 31) {
                            var imc_l = 'SOBREPESO';
                        } else {
                            var imc_l = 'OBESO';
                        }
                    }
                }
            }
        return imc_l; 
    }
}

/*var persona = new Persona (69,1.67);

console.log (persona.peso);
console.log (persona.altura);
console.log ("proto persona");
console.log (persona.__proto__);
var imc_n = persona.calcularIMC_n();
var imc_l = persona.calcularIMC_l();
console.log("El imc numérico es : "+imc_n+" y el imc literal es : "+ imc_l);
*/