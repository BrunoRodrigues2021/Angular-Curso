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
let num = 2;
const pi = 3.14;
numeros.map(valor => {
    return valor * 2;
});
class Matematica {
    soma(x, y) {
        return x + y;
    }
}
//TIPAGEM DE VARIAVEIS NO TS
var n1: any = 'stringd';