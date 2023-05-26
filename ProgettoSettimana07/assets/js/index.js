var minutiChiamata2;
var costo2;
var nChiamate2 = 0;
var btnVerifica = document.getElementById("verifica");
var credito2 = document.getElementById("credito");
var numeroChiamate2 = document.getElementById("numeroChiamate");
var valore1;
var valore2;
var messaggio = document.getElementById("Contototale");
btnVerifica === null || btnVerifica === void 0 ? void 0 : btnVerifica.addEventListener("click", Cronologia);
function Cronologia() {
    messaggio.innerHTML = "";
    valore1 = Number(credito2 === null || credito2 === void 0 ? void 0 : credito2.value);
    valore2 = Number(numeroChiamate2 === null || numeroChiamate2 === void 0 ? void 0 : numeroChiamate2.value);
    var newUtente = new Utenti3(valore1, valore2);
    messaggio.innerHTML += "Credito: ".concat(newUtente.credito2, " <code class=\"text-dark\">&euro;</code><br>");
    return "".concat(newUtente.chiamata());
}
var Utenti3 = /** @class */ (function () {
    function Utenti3(valore1, valore2) {
        this.credito2 = valore1;
        this.numeroChiamate2 = valore2;
    }
    Utenti3.prototype.ricarica = function () {
        this.credito2 += Math.floor(Math.random() * 20) + 1;
        return this.credito2;
    };
    Utenti3.prototype.chiamata = function () {
        for (var i = 1; i <= this.numeroChiamate2; i++) {
            if (i == this.numeroChiamate2) {
                minutiChiamata2 = Math.floor(Math.random() * 15) + 1;
                costo2 = (minutiChiamata2 * 20) / 100;
                messaggio.innerHTML += "".concat(i, "\u00B0 chiamata: ").concat(minutiChiamata2, " min, <br> Costo della singola chiamata: ").concat(costo2, " <code class=\"text-dark\">&euro;</code> <br> Credito residuo: ").concat(this.numero404().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Numero chiamate ").concat(this.getNumeroChiamate(), "  <br> Numero chiamate azzerate ").concat(this.numeroChiamate2, " <br><br>");
                this.azzeraChiamate();
            }
            else if (i == 1) {
                minutiChiamata2 = Math.floor(Math.random() * 15) + 1;
                costo2 = (minutiChiamata2 * 20) / 100;
                messaggio.innerHTML += "Credito ricarica: ".concat(this.ricarica().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> ").concat(i, "\u00B0 chiamata: ").concat(minutiChiamata2, " min, <br> Costo della singola chiamata: ").concat(costo2, "<code class=\"text-dark\">&euro;</code> <br> Credito residuo: ").concat(this.numero404().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Numero chiamate ").concat(this.getNumeroChiamate(), " <br><br>");
            }
            else {
                minutiChiamata2 = Math.floor(Math.random() * 15) + 1;
                costo2 = (minutiChiamata2 * 20) / 100;
                messaggio.innerHTML += "".concat(i, "\u00B0 chiamata: ").concat(minutiChiamata2, " min, <br> Costo della singola chiamata: ").concat(costo2, "<code class=\"text-dark\">&euro;</code> <br> Credito residuo: ").concat(this.numero404().toFixed(2), "<code class=\"text-dark\">&euro;</code> <br> Numero chiamate ").concat(this.getNumeroChiamate(), " <br><br>");
            }
        }
    };
    Utenti3.prototype.numero404 = function () {
        this.credito2 = (this.credito2 - costo2);
        return this.credito2;
    };
    Utenti3.prototype.getNumeroChiamate = function () {
        return nChiamate2 = nChiamate2 + 1;
    };
    Utenti3.prototype.azzeraChiamate = function () {
        this.numeroChiamate2 = 0;
        nChiamate2 = 0;
    };
    return Utenti3;
}());
console.log(Cronologia());
