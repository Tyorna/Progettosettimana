let minutiChiamata2: number;
let costo2: number;
let nChiamate2: number = 0;
var btnVerifica = document.getElementById("verifica") as HTMLElement;
var credito2 = document.getElementById("credito") as HTMLInputElement | null;
var numeroChiamate2 = document.getElementById(
  "numeroChiamate"
) as HTMLInputElement | null;
var valore1: number;
var valore2: number;
var messaggio = document.getElementById("Contototale") as HTMLElement | null;

btnVerifica?.addEventListener("click", Cronologia);

function Cronologia(): string {
 messaggio!.innerHTML= "";
  valore1 = Number(credito2?.value);
  valore2 = Number(numeroChiamate2?.value);
  let newUtente = new Utenti3(valore1, valore2);
  messaggio!.innerHTML += `Credito: ${newUtente.credito2} <code class="text-dark">&euro;</code><br>`;
  return  `${newUtente.chiamata()}`;
}

interface Smartphone2 {
  credito2: number;
  numeroChiamate2: number;

  ricarica(): number;
  chiamata(): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class Utenti3 implements Smartphone2 {
  credito2: number;
  numeroChiamate2: number;
  constructor(valore1: number, valore2: number) {
    this.credito2 = valore1;
    this.numeroChiamate2 = valore2;
  }

  ricarica(): number {
    this.credito2 += Math.floor(Math.random() * 20)+ 1;
    return this.credito2;
  }

  chiamata(): void {
    for (let i: number = 1; i <= this.numeroChiamate2; i++) {
      if (i == this.numeroChiamate2) {
        minutiChiamata2 = Math.floor(Math.random() * 15)+1;
        costo2 = (minutiChiamata2 * 20) / 100;
        messaggio!.innerHTML += `${i}° chiamata: ${minutiChiamata2} min, <br> Costo della singola chiamata: ${costo2} <code class="text-dark">&euro;</code> <br> Credito residuo: ${this.numero404().toFixed(2)}<code class="text-dark">&euro;</code> <br> Numero chiamate ${this.getNumeroChiamate()}  <br> Numero chiamate azzerate ${this.numeroChiamate2} <br><br>`
        this.azzeraChiamate();
      } else if (i == 1) {
        minutiChiamata2 = Math.floor(Math.random() * 15) +1;
        costo2 = (minutiChiamata2 * 20) / 100;
        messaggio!.innerHTML += `Credito ricarica: ${this.ricarica().toFixed(2)}<code class="text-dark">&euro;</code> <br> ${i}° chiamata: ${minutiChiamata2} min, <br> Costo della singola chiamata: ${costo2}<code class="text-dark">&euro;</code> <br> Credito residuo: ${this.numero404().toFixed(2)}<code class="text-dark">&euro;</code> <br> Numero chiamate ${this.getNumeroChiamate()} <br><br>`;
      } else {
        minutiChiamata2 = Math.floor(Math.random() * 15) +1;
        costo2 = (minutiChiamata2 * 20) / 100;
        messaggio!.innerHTML += `${i}° chiamata: ${minutiChiamata2} min, <br> Costo della singola chiamata: ${costo2}<code class="text-dark">&euro;</code> <br> Credito residuo: ${this.numero404().toFixed(2)}<code class="text-dark">&euro;</code> <br> Numero chiamate ${this.getNumeroChiamate()} <br><br>`;
      }
    }
  }

  numero404(): number {
    this.credito2 = (this.credito2 - costo2);
    return this.credito2;
  }

  getNumeroChiamate(): number {
    return nChiamate2 = nChiamate2 + 1;
    }
  

  azzeraChiamate(): void {
    this.numeroChiamate2 = 0;
    nChiamate2 = 0;
  }
}


console.log(Cronologia());
