var mChiamata;
var cost;
var numChiamata = 0;
var btnVerifica = document.getElementById("verifica");
var credito2 = document.getElementById("credito");
var numeroChiamate2 = document.getElementById("numeroChiamate");
var operatore = document.getElementById("operatore");
var valore1;
var valore2;
var messaggio = document.getElementById("Contototale");
var tassa1 = (15 / 100);
var tassa2 = (20 / 100);
var tassa3 = (10 / 100);
window.addEventListener("load", function () {
    credito2.value = "";
    numeroChiamate2.value = "";
    operatore.value = "";
    messaggio.innerHTML = "";
});
btnVerifica === null || btnVerifica === void 0 ? void 0 : btnVerifica.addEventListener("click", Cronologia2);
function Cronologia2() {
    if (credito2.value == "" ||
        numeroChiamate2.value == "" ||
        operatore.value == "") {
        alert("Inserire un campo valido");
    }
    messaggio.innerHTML = "";
    valore1 = Number(credito2 === null || credito2 === void 0 ? void 0 : credito2.value);
    valore2 = Number(numeroChiamate2 === null || numeroChiamate2 === void 0 ? void 0 : numeroChiamate2.value);
    if (operatore.value == "1") {
        var newUtente = new Tim(valore1, valore2, tassa1);
        messaggio.innerHTML += "Credito: ".concat(newUtente.credito2, " <code class=\"text-dark\">&euro;</code><br>");
        return "".concat(newUtente.chiamata());
    }
    else if (operatore.value == "2") {
        var newUtente = new Tim(valore1, valore2, tassa2);
        messaggio.innerHTML += "Credito: ".concat(newUtente.credito2, " <code class=\"text-dark\">&euro;</code><br>");
        return "".concat(newUtente.chiamata());
    }
    else {
        var newUtente = new Tim(valore1, valore2, tassa3);
        messaggio.innerHTML += "Credito: ".concat(newUtente.credito2, " <code class=\"text-dark\">&euro;</code><br>");
        return "".concat(newUtente.chiamata());
    }
}
var Tim = /** @class */ (function () {
    function Tim(valore1, valore2, _tassa) {
        this.credito2 = valore1;
        this.numeroChiamate2 = valore2;
        this.tassa = _tassa;
    }
    Tim.prototype.ricarica = function () {
        this.credito2 += Math.floor(Math.random() * 20) + 1;
        return this.credito2;
    };
    Tim.prototype.chiamata = function () {
        for (var i = 1; i <= this.numeroChiamate2; i++) {
            if (i == this.numeroChiamate2) {
                mChiamata = Math.floor(Math.random() * 15) + 1;
                cost = (mChiamata * this.tassa);
                messaggio.innerHTML += "".concat(i, "\u00B0 chiamata: ").concat(mChiamata, " min, <br> Costo della singola chiamata: ").concat(cost.toFixed(2), " <code class=\"text-dark\">&euro;</code> <br> Credito residuo: ").concat(this.numero404().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Numero chiamate ").concat(this.getNumeroChiamate(), "  <br> Numero chiamate azzerate ").concat(this.numeroChiamate2, " <br><br>");
                this.azzeraChiamate();
            }
            else if (i == 1) {
                mChiamata = Math.floor(Math.random() * 15) + 1;
                cost = (mChiamata * this.tassa);
                messaggio.innerHTML += "Credito ricarica: ".concat(this.ricarica().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> ").concat(i, "\u00B0 chiamata: ").concat(mChiamata, " min, <br> Costo della singola chiamata: ").concat(cost.toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Credito residuo: ").concat(this.numero404().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Numero chiamate ").concat(this.getNumeroChiamate(), " <br><br>");
            }
            else {
                mChiamata = Math.floor(Math.random() * 15) + 1;
                cost = (mChiamata * this.tassa);
                messaggio.innerHTML += "".concat(i, "\u00B0 chiamata: ").concat(mChiamata, " min, <br> Costo della singola chiamata: ").concat(cost.toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Credito residuo: ").concat(this.numero404().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Numero chiamate ").concat(this.getNumeroChiamate(), " <br><br>");
            }
        }
    };
    Tim.prototype.numero404 = function () {
        this.credito2 = this.credito2 - cost;
        return this.credito2;
    };
    Tim.prototype.getNumeroChiamate = function () {
        return (numChiamata = numChiamata + 1);
    };
    Tim.prototype.azzeraChiamate = function () {
        this.numeroChiamate2 = 0;
        numChiamata = 0;
    };
    return Tim;
}());
