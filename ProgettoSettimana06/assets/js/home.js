const url = "https://striveschool-api.herokuapp.com/api/product/";

var riga = document.getElementById("row");
var carrello = document.getElementById("carrello");

window.addEventListener('load', function () {
  var loading = document.getElementById('loading');
  loading.classList.add('d-none');
});

fetch(url, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
  },
})
  .then((risultatoDellaFetch) => {
    console.log(risultatoDellaFetch);
    if (risultatoDellaFetch.ok) {
      return risultatoDellaFetch.json();
    } else {
      throw risultatoDellaFetch.statusText;
    }
  })
  .then((data) => {
    console.log(data);
    //data.forEach((dato) => {
     // compilaCard(dato);
    //});

    for(let i=0; i<data.length; i++){
        const card = `<div class="col-12 col-md-6 col-lg-4 mb-2 g-2" id="card"><div class= "card" id="${data[i]._id}"><img class= "card-img-top img" src=${data[i].imageUrl}><div class="card-body"><div class="card-title fw-semibold spazio">${data[i].name}</div><div class="position-relative card-text mb-2">${data[i].description}<span class="position-absolute text-dark border border-warning-subtle badge"><code class="text-dark fs-6">&euro;</code> ${data[i].price}</span></div>
        <button class="bg-info ms-lg-3 me-lg-1 rounded-pill p-1 px-3" type="button" onclick= 'scopri(event)'>Scopri di più</button><button class="bg-danger rounded-pill p-1 px-3" type="button" onclick= 'modifica(event)'>Modifica</button></div></div></div>`
        row.innerHTML += card;
    }
  })
  .catch((error) =>
    console.error("Erorre durante il recupero degli oggetti: ", error)
  );

function scopri(event){
 window.location.assign("./details.html?id=" + event.target.parentElement.parentElement.id);
}

function modifica (event){   
    window.location.assign("./index.html?id=" + event.target.parentElement.parentElement.id);
}




 /*let addressBarContent = new URLSearchParams(window.location.search);
    let eventId = addressBarContent.get('id');
    console.log('EVENTID', eventId);*/


    /*fetch(url + eventId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
        },
      })
              .then((res) => {
                if (res.ok) {
                  return res.json(),
                  console.log('ci sono');
                } else {
                  throw new Error("Errore nel recupero dell'evento")
                }
              })
              .then((event) => {
                console.log(
                  'DATI DEL SINGOLO EVENTO, RECUPERATO TRAMITE GET SINGOLA',
                  event
                )
            document.getElementById('name').value = event.name
            document.getElementById('description').value = event.description
            document.getElementById('brand').value = event.description
            document.getElementById('imageUrl').value = event.imageUrl
            document.getElementById('price').value = event.price
            console.log(event.name)
              })
              .catch((error) => {
                console.log(error)
              })*/