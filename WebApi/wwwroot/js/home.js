let buttons = {
    exit: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
    </svg>`
}
var products = document.querySelector(".products")
getPage()
navContainer();
getAllProduct()

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
                    headerContainer.innerHTML += `<a onclick="exitUser()" class="btn"> Çıkış ${buttons.exit}</a>
                                                  <a href="Basketpage" class="btn"> Sepete Git </a>
                                                  <a href="Product" class="btn">Admin Modu</a>`
                }
                else {
                    headerContainer.innerHTML += `<a onclick="exitUser()" class="btn"> Çıkış ${buttons.exit}</a>
                                                  <a href="Basketpage" class="btn"> Sepete Git </a>`
                }
            })
    }
}

//Kullanıcıdan çıkış yapıyor.
function exitUser() {
    sessionStorage.removeItem("User")
    window.location.reload()
}

//Kategorileri getirir ve navigatörü oluşturur.
function navContainer() {
    let nav = document.querySelector(".nav-container")
    fetch("https://localhost:5001/api/category")
        .then(response => response.json())
        .then(res => {
            for (var i in res) {
                nav.innerHTML += `<span onclick="getProduct(${res[i].categoryId})">${res[i].categoryName}</span>`
            }
        })
}


//Bütün Ürünleri getirir ve listeler
function getAllProduct() {
    var x = sessionStorage.getItem("User")
    fetch("https://localhost:5001/api/product")
        .then(response => response.json())
        .then(res => {
            products.innerHTML = " "
            for (var i in res) {
                if (x == null) {
                    products.innerHTML += `<div class="product">
                                <li class="item">
                                <img width="200" height="200"  src="${res[i].image}">
                                <p style="height:40px">${res[i].productName}</p>
                                <p>${"FİYAT = " + res[i].price} TL</p></li>
                    </div>`
                }
                else {
                    products.innerHTML += `<div class="product">
                                <li class="item">
                                <img width="200" height="200"  src="${res[i].image}">
                                <p style="height:40px">${res[i].productName}</p>
                                <p>${"FİYAT = " + res[i].price} TL</p>
                                <span class="addBasket" onclick="basketAdd(${res[i].productId})">Sepete Ekle</span> </li>
                    </div>`
                }
            }
        })
}

//Seçilen kategorideki ürünleri getirir
function getProduct(id) {
    fetch(`https://localhost:5001/api/product/category/${id}`)
        .then(response => response.json())
        .then(res => {
            products.innerHTML = " "
            for (var i in res) {
                products.innerHTML += `<div class="product">
                            <li class="item">
                            <img width="200" height="200"  src="${res[i].image}">
                            <p style="height:40px">${res[i].productName}</p>
                            <p>${"FİYAT = " + res[i].price} TL</p>
                            <span class="addBasket" onclick="basketAdd(${res[i].productId})">Sepete Ekle</span> </li>
                </div>`
            }
        })
}

//Sepete ekleme işmeli yapıyor
function basketAdd(pId) {
    var x = sessionStorage.getItem("User")
    fetch("https://localhost:5001/api/basketpage", {
        method: 'POST',
        body: JSON.stringify({
            customerId: x,
            productId: pId
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(console.log("Ekleme başarılı"))
}