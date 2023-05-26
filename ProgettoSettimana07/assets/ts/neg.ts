let mChiamata2: number;
let cost2: number;
let numChiamata2: number = 0;
var btnVerifica = document.getElementById("verifica") as HTMLElement;
var credito2 = document.getElementById("credito") as HTMLInputElement | null;
var numeroChiamate2 = document.getElementById("numeroChiamate") as HTMLInputElement | null;
var operatore = document.getElementById("operatore") as HTMLInputElement | null;
var valore1: number;
var valore2: number;
var messaggio = document.getElementById("Contototale") as HTMLElement | null;
var tassa1: number = (15 / 100);
var tassa2: number = (20 / 100);
var tassa3: number = (10 / 100);

window.addEventListener("load", function () {
  credito2!.value = "";
  numeroChiamate2!.value = "";
  operatore!.value = "";
  messaggio!.innerHTML = "";
});

btnVerifica?.addEventListener("click", Cronologia2);

function Cronologia2(): string {
  if (
    credito2!.value == "" ||
    numeroChiamate2!.value == "" ||
    operatore!.value == ""
  ) {
    alert("Inserire un campo valido");
  }

    messaggio!.innerHTML = "";
    valore1 = Number(credito2?.value);
    valore2 = Number(numeroChiamate2?.value);
    if (operatore!.value == "1") {
      let newUtente = new Wind(valore1, valore2, tassa1);
      messaggio!.innerHTML += `Credito: ${newUtente.credito2} <code class="text-dark">&euro;</code><br>`;
      return `${newUtente.chiamata()}`;
    } else if (operatore!.value == "2") {
      let newUtente = new Wind(valore1, valore2 , tassa2);
      messaggio!.innerHTML += `Credito: ${newUtente.credito2} <code class="text-dark">&euro;</code><br>`;
      return `${newUtente.chiamata()}`;
    } else{
      let newUtente = new Wind(valore1, valore2, tassa3);
      messaggio!.innerHTML += `Credito: ${newUtente.credito2} <code class="text-dark">&euro;</code><br>`;
      return `${newUtente.chiamata()}`;
    }
  }

  interface Smartphone4 {
    credito2: number;
    numeroChiamate2: number;
    tassa: number;

    ricarica(): number;
    chiamata(): void;
    numero404(): string;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
  }

  class Wind implements Smartphone4 {
    credito2: number;
    numeroChiamate2: number;
    tassa: number;
    constructor(valore1: number, valore2: number, _tassa: number) {
      this.credito2 = valore1;
      this.numeroChiamate2 = valore2;
      this.tassa = _tassa;
    }

    ricarica(): number {
      this.credito2 += Math.floor(Math.random() * 20) + 1;
      return this.credito2;
    }

    chiamata(): void {
      for (let i: number = 1; i <= this.numeroChiamate2; i++) {
        if (i == this.numeroChiamate2) {
          mChiamata2 = Math.floor(Math.random() * 15) + 1;
          cost2 = (mChiamata2 * this.tassa);
          messaggio!.innerHTML += `${i}° chiamata: ${mChiamata2} min, <br> Costo della singola chiamata: ${cost2.toFixed(2)} <code class="text-dark">&euro;</code> <br> Credito residuo: ${this.numero404()}<code class="text-dark">&euro;</code> <br> Numero chiamate ${this.getNumeroChiamate()}  <br> Numero chiamate azzerate ${this.numeroChiamate2} <br><br>`;
          this.azzeraChiamate();
        } else if (i == 1) {
          mChiamata2 = Math.floor(Math.random() * 15) + 1;
          cost2 = (mChiamata2 * this.tassa);
          messaggio!.innerHTML += `Credito ricarica: ${this.ricarica().toFixed(2)}<code class="text-dark">&euro;</code> <br> ${i}° chiamata: ${mChiamata2} min, <br> Costo della singola chiamata: ${cost2.toFixed(2)}<code class="text-dark">&euro;</code> <br> Credito residuo: ${this.numero404()}<code class="text-dark">&euro;</code> <br> Numero chiamate ${this.getNumeroChiamate()} <br><br>`;
        } else {
          mChiamata2 = Math.floor(Math.random() * 15) + 1;
          cost2 = (mChiamata2 * this.tassa);
          messaggio!.innerHTML += `${i}° chiamata: ${mChiamata2} min, <br> Costo della singola chiamata: ${cost2.toFixed(2)}<code class="text-dark">&euro;</code> <br> Credito residuo: ${this.numero404()}<code class="text-dark">&euro;</code> <br> Numero chiamate ${this.getNumeroChiamate()} <br><br>`;
        }
      }
    }

    numero404(): string {
      if( this.credito2 > 0){
        this.credito2 = this.credito2 - cost2;
      return this.credito2.toFixed(2);
      } else {
        return `Non hai abbastanza credito per effettuare una chiamata`;
      }
     
    }

    getNumeroChiamate(): number {
      return (numChiamata2 = numChiamata2 + 1);
    }

    azzeraChiamate(): void {
      this.numeroChiamate2 = 0;
      numChiamata2 = 0;
    }
  }
