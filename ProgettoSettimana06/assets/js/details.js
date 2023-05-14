const url = "https://striveschool-api.herokuapp.com/api/product/";

var riga = document.getElementById("row");
var carrello = document.getElementById("carrello");
let urlBar = new URLSearchParams(window.location.search);
let idNumber = urlBar.get("id");
console.log("idNumber", idNumber);

if (idNumber) {
  fetch(url + idNumber, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error in loading the event");
      }
    })
    .then((event) => {
      console.log(
        "Loading one object",
        event
      );
      const card = `<div class="border border-success mb-3 p-3 details" id="${event._id}"><br><h4 class="inline me-2">_id:</h4><span>${event._id}</span><br><h4 class="inline me-2">Name:</h4><p class="inline">${event.name}</p><br><h4 class="inline me-2">Description:</h4><p class="inline">${event.description}</p><br><h4 class="inline me-2">Brand:</h4><p class="inline">${event.brand}</p><br><h4 class="inline me-2">ImageUrl:</h4><p class="spazio">${event.imageUrl}</p><h4 class="inline me-2">Price:</h4><p class="inline">${event.price}</p><br><h4 class="inline me-2">UserId:</h4><p class="inline">${event.userId}</p><br><h4 class="inline me-2">CreatedAt:</h4><p class="inline">${event.createdAt}</p><br><h4 class="inline me-2">UpdatedAt:</h4><p class="inline">${event.updatedAt}</p><br><h4 class="inline me-2">__v:</h4><p class="inline">${event.__v}</p><br><br><button type="button" onclick ="modify(event)" class="me-5 btn btn-warning btn btn-outline-dark rounded-pill">Modifica</button><button type="button" onclick ="home(event)" class="btn btn-info btn btn-outline-dark rounded-pill">Torna alla homepage</button></div>`;
      row.innerHTML += card;
    })
    .catch((error) => {
      console.log(error);
    });

} else {
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
      for (let i = 0; i < data.length; i++) {
        const card = `<div class="col-lg-5 border border-success mb-3 p-3 details me-3" id="${data[i]._id}"><span>N°${[i]}</span><br><h4 class="inline me-2">_id:</h4><span class="id">${data[i]._id}</span><br><h4 class="inline me-2">Name:</h4><p class="inline">${data[i].name}</p><br><h4 class="inline me-2">Description:</h4><p class="inline">${data[i].description}</p><br><h4 class="inline me-2">Brand:</h4><p class="inline">${data[i].brand
        }</p><br><h4 class="inline me-2">ImageUrl:</h4><p class="spazio">${data[i].imageUrl}</p><h4 class="inline me-2">Price:</h4><p class="inline">${data[i].price}</p><br><h4 class="inline me-2">UserId:</h4><p class="inline">${
          data[i].userId}</p><br><h4 class="inline me-2">CreatedAt:</h4><p class="inline">${
          data[i].createdAt}</p><br><h4 class="inline me-2">UpdatedAt:</h4><p class="inline">${
          data[i].updatedAt}</p><br><h4 class="inline me-2 mb-3">__v:</h4><p class="inline mb-3">${
          data[i].__v}</p><br><br><button type="button" class="m-auto btn btn-warning btn-outline-dark rounded-pill" onclick ="modify(event)">Modifica</button>`;

        row.innerHTML += card;
      }
    })
    .catch((error) =>
      console.error("Error in recovering the data: ", error)
    );
}

function modify(event) {
  window.location.assign("./index.html?id=" + event.target.parentElement.id);
}

function home(event) {
    location.href = "homepage.html";
  }