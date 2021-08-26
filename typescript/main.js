//javasript puto/vanilla
var minhaVar = 'variavel';
var numeros = [1, 2, 3];
function minhaFunc(x, y) {
    return x + y;
}
numeros.map(function (valor) {
    return valor * 2;
});
//javascript ES6 - 2015
var num = 2;
var pi = 3.14;
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//TIPAGEM DE VARIAVEIS NO TS
var n1 = 'string';
n1 = 4;
