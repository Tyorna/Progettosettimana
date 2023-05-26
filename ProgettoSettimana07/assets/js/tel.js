var minutiChiamta;
var costo;
var nChiamate = 0;
var Utenti = /** @class */ (function () {
    function Utenti(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    /*Tre istanze della classe che rappresentano tre utenti che hanno un credito iniziale, fanno una ricarica, fanno un certo numero di chiamate, vedono il credito residuo e poi si azzera il contatore chiamate
  Tutti console log dei metodi eseguiti in un certo ordine, quindi::
  console.log credito iniziale
  console log prima chiamata con la durata
  console log credito residuo e numero chiamate effettuate (ovviamente una)
  console log seconda chiamata con la durata
  console log credito residuo e numero chiamate effettuate (ovviamente due)
  console log terza chiamata con la durata
  console log credito residuo e numero chiamate effettuate (ovviamente tre)
  console log azzeramento chiamate
  Dimenticavo
  Dopo il console log credito iniziale va fatto il console log ricarica
  Ovviamente di chiamate puoi farne quante ne vuoi, così come gli altri numeri (durata, credito, ricarica) sonno a tua discrezione, assunto che le chiamate costano 0.20 al minuto, ma ti direi di farne comunque almeno due*/
    /*ricarica(): void {
      console.log(`Credito: ${this.credito}`);
      this.credito += (Math.floor(Math.random()*10));
      console.log(`Nuovo credito: ${this.credito} euro`);
      this.chiamata();
    }
  
    chiamata(): void {
      for (let i:number = 1; i<=this.numeroChiamate; i++)
      if (i == this.numeroChiamate){
          minutiChiamta = Math.floor(Math.random()*60);
          console.log(`${i}° chiamata: ${minutiChiamta} min`);
          costo += minutiChiamta * 0.20;
       this.getNumeroChiamate();
       this.azzeraChiamate();
       this.numero404();
       console.log(`Credito residuo: ${this.numero404()}`);
      } else {
          minutiChiamta = Math.floor(Math.random()*60);
          console.log(`${i}° chiamata: ${minutiChiamta} min`);
          costo += minutiChiamta * 0.20;
       this.getNumeroChiamate();
      }
    }
  
     numero404(): number {
      return (this.credito - costo);
    }
  
    getNumeroChiamate(): number {
      return  2
    }
  
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
    }
  }*/
    Utenti.prototype.ricarica = function () {
        console.log("Credito: ".concat(this.credito));
        this.credito += 5;
        console.log("Nuovo credito: ".concat(this.credito, " euro"));
        this.chiamata();
    };
    Utenti.prototype.chiamata = function () {
        for (var i = 1; i <= this.numeroChiamate; i++) {
            if (i == this.numeroChiamate) {
                minutiChiamta = Math.floor(Math.random() * 15);
                console.log("".concat(i, "\u00B0 chiamata: ").concat(minutiChiamta, " min"));
                costo = (minutiChiamta * 20) / 100;
                console.log("Costo della singola chiamata: ".concat(costo));
                this.numero404();
                console.log("Credito residuo: ".concat(this.numero404().toFixed(2)));
                console.log("Numero chiamate ".concat(nChiamate));
                this.azzeraChiamate();
            }
            else {
                minutiChiamta = Math.floor(Math.random() * 15);
                console.log("".concat(i, "\u00B0 chiamata: ").concat(minutiChiamta, " min"));
                costo = (minutiChiamta * 20) / 100;
                console.log("Costo della singola chiamata: ".concat(costo));
                this.numero404();
                console.log("Credito residuo: ".concat(this.numero404().toFixed(2)));
                this.getNumeroChiamate();
                console.log("Numero chiamate ".concat(nChiamate));
            }
        }
    };
    Utenti.prototype.numero404 = function () {
        this.credito = (this.credito - costo);
        return this.credito;
    };
    Utenti.prototype.getNumeroChiamate = function () {
        return nChiamate = nChiamate + 1;
    };
    Utenti.prototype.azzeraChiamate = function () {
        console.log("Chiamate azzerate: ".concat(this.numeroChiamate));
        this.numeroChiamate = 0;
        nChiamate = 0;
    };
    return Utenti;
}());
var Utente = new Utenti(40, 6);
var Utente2 = new Utenti(30, 12);
var Utente3 = new Utenti(19, 2);
console.log("Primo Utente : \n ".concat(Utente.ricarica(), " \n \n"));
console.log("Secondo Utente : \n ".concat(Utente2.ricarica(), " \n \n"));
console.log("Terzo Utente : \n ".concat(Utente3.ricarica(), " \n \n"));
/*console.log(
    `Primo utente  \n Credito: ${Utente.credito} \n Numero chiamate: ${Utente.getNumeroChiamate()} \n Azzeramento chiamate: ${Utente.azzeraChiamate()}}`
  );

console.log(
  `Primo utente \n Credito residuo: ${Utente.numero404()} \n Numero chiamate: ${Utente.getNumeroChiamate()} \n Azzeramento chiamate: ${Utente.azzeraChiamate()} \n \n Secondo utente \n Credito residuo: ${Utente2.numero404()} \n Numero chiamate: ${Utente2.getNumeroChiamate()} \n Azzeramento chiamate: ${Utente2.azzeraChiamate()} \n \n Terzo utente \n Credito residuo: ${Utente3.numero404()} \n Numero chiamate: ${Utente3.getNumeroChiamate()} \n Azzeramento chiamate: ${Utente3.azzeraChiamate()}`
);*/
