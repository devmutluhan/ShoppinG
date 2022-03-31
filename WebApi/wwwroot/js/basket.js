var icon = {
    deleteBtn: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    </svg>`,
    basket: `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>`
}
getPage()
getBasket()

function getPage() {
    var x = sessionStorage.getItem("User")
    var headerContainer = document.querySelector(".header-container")
    if (x == null) {
        headerContainer.innerHTML += `<a href="Signuppage" class="btn">Üye Ol</a>
                                      <a href="Loginpage" class="btn">Giriş Yap</a>`
    }
    else {
        fetch(`https://localhost:5001/api/customer/${x}`)
            .then(response => response.json())
            .then(res => {
                if (res.type == "Admin") {
                    headerContainer.innerHTML += `<a href="/" class="btn"> Ana Sayfa </a>
                                                  <a href="Product" class="btn">Admin Modu</a>`
                }
                else {
                    headerContainer.innerHTML += `<a href="/" class="btn"> Ana Sayfa </a>`
                }
            })
    }
}

function getBasket() {
    var id = sessionStorage.getItem("User")
    fetch(`https://localhost:5001/api/basketpage/customer/${id}`)
        .then(response => response.json())
        .then(res => {
            let basketContainer = document.querySelector(".basket-container")
            basketContainer.innerHTML = ""
            if (res.length == 0) {
                basketContainer.innerHTML = `<br> <br> <h1>${icon.basket} Sepetin şu an boş </h1> `
            }
            else {
                var totalprice = 0;
                for (var i in res) {
                    basketContainer.innerHTML += `<div> <img src="${res[i].image}">
                                                  <h3> ${res[i].productName}</h3>
                                                  <span onclick="deleteBasket(${res[i].basketId})"> ${icon.deleteBtn}</span>
                                                  <h3> ${res[i].price} TL </h3>
                                                  </div>`
                    totalprice += res[i].price
                }
                basketContainer.innerHTML += `<h2 style="text-align:right; margin:50px;"> Toplam Fiyat : ${totalprice} TL </h2>`
            }
        })
}

function deleteBasket(id) {
    fetch(`https://localhost:5001/api/basketpage/${id}`, {
        method:'DELETE'
    }).then(res => {
        console.log("Silme başarılı")
        getBasket();
    })
}