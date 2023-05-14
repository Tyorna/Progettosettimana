const url = "https://striveschool-api.herokuapp.com/api/product/";
console.log("mi funzioni?");
let urlBar = new URLSearchParams(window.location.search);
let idNumber = urlBar.get("id");
console.log("idNumber", idNumber);



const btnDelete = document.getElementById("btnDelete");
const btnConfirm = document.getElementById("confirm");
const btnConfirm2 = document.getElementById("confirmReset");
const btnSubmit = document.getElementById('btnSubmit');

  if (idNumber) {
    document.getElementById('title').innerText ='Modifica l\'oggetto selezionato'
    btnSubmit.innerText = 'Modifica l\'oggetto'
    btnDelete.classList.remove('d-none');
    fetch(url + idNumber, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error regarding the id")
        }
      })
      .then((event) => {
        console.log(
          'Data saved =>',
          event
        )
        document.getElementById("name").value = event.name;
    document.getElementById("description").value = event.description;
    document.getElementById("price").value = event.price;
    document.getElementById("brand").value = event.brand;
    document.getElementById("imageUrl").value = event.imageUrl;
      })
      .catch((error) => {
        console.log(error)
      });
      btnSubmit.addEventListener("click", function () {
        console.log("invio i dati");
        let nameInput = document.getElementById("name");
        let descriptionInput = document.getElementById("description");
        let priceInput = document.getElementById("price");
        let brandInput = document.getElementById("brand");
        let imageUrlInput = document.getElementById("imageUrl");
        if (
          !nameInput.value ||
          !imageUrlInput.value ||
          !descriptionInput.value ||
          !brandInput.value
        ) {
          alert("Fill every field");
        } else if(!priceInput.value){
          alert("Fill price with numbers");
        }else {
          let newObject = {
            name: nameInput.value,
            description: descriptionInput.value,
            price: priceInput.value,
            brand: brandInput.value,
            imageUrl: imageUrlInput.value,
          };
      
          console.log("ready to send to the API", newObject);
          fetch(url + idNumber, {
            method:'PUT',
            body: JSON.stringify(newObject),
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log("response", res);
            if (res.ok) {
              alert('Object modified!');
            } else {
              alert("Saving error");
              throw new Error("Saving error");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
  } else {
    btnSubmit.addEventListener("click", function () {
      console.log("invio i dati");
      let nameInput = document.getElementById("name");
      let descriptionInput = document.getElementById("description");
      let priceInput = document.getElementById("price");
      let brandInput = document.getElementById("brand");
      let imageUrlInput = document.getElementById("imageUrl");
      if (
        !nameInput.value ||
        !imageUrlInput.value ||
        !descriptionInput.value ||
        !brandInput.value
      ) {
        alert("Fill every field");
      } else if(!priceInput.value){
        alert("Fill price with numbers");
      }else {
        let newObject = {
          name: nameInput.value,
          description: descriptionInput.value,
          price: priceInput.value,
          brand: brandInput.value,
          imageUrl: imageUrlInput.value,
        };
    
        console.log("ready to send to the API", newObject);
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(newObject),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("response", res);
          if (res.ok) {
            alert('Object created!');
          } else {
            alert("Saving error");
            throw new Error("Saving error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })};

  btnConfirm.addEventListener("click", function () {
    console.log("Sending data");
    fetch(url + idNumber, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjQ4YTg4Zjc0MDAwMTQyODc0M2EiLCJpYXQiOjE2ODM4NzkwNTAsImV4cCI6MTY4NTA4ODY1MH0.TFSsVT_m8mZJw4NoMqLZuX3gTiNLZjWfmlXNYItfAfg",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Your object has been deleted");
          return (location.href = "index.html");
        } else {
          throw new Error("Something went wrong with the deleting process");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  btnConfirm2.addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("imageUrl").value = "";
  });