var addBtn = document.querySelector(".addButton")
getCategory()
main()

//İlk başta çalışır
function main() {
    if (sessionStorage.getItem("Product") == null) {
        addBtn.innerHTML = "Ekle"
        addProduct()
    }
    else {
        addBtn.innerHTML = "Düzenle"
        updateProduct()
    }
}

//Ekleme yapılırken çalışır
function addProduct() {
    addBtn.addEventListener("click", function () {
        if (addBtn.innerHTML == "Ekle") {
            var data = readInput()
            postProduct(data)
            console.log("Ekleme Başarılı")
        }
    })
}

//Düzenleme yapılırken çalışır
function updateProduct() {
    var id = onEdit()
    addBtn.addEventListener("click", function () {
        if (addBtn.innerHTML == "Düzenle") {
            putProduct(id)
            console.log("Güncelleme Başarılı")
        }
    })
}

//Db üzerinde put işlemini gerçekleştirir
function putProduct(id) {
    let data = readInput();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "productName": data.name,
        "price": parseInt(data.price),
        "stock": parseInt(data.stock),
        "image": data.image,
        "categoryId": parseInt(data.category)
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`https://localhost:5001/api/product/${id}`, requestOptions)
        .then(response => {
            sessionStorage.removeItem("Product")
            addBtn.innerHTML = "Ekle"
            resetInput()
        })

}

//Üründe değişiklik yapılırken özellikleri textlere otomatik doldurur.
function onEdit() {
    var id = sessionStorage.getItem("Product")
    fetch(`https://localhost:5001/api/product/${id}`)
        .then(response => response.json())
        .then(res => {
            document.querySelector("#nameInput").value = res.productName
            document.querySelector("#priceInput").value = res.price
            document.querySelector("#stockInput").value = res.stock
            document.querySelector("#imageInput").value = res.image
        })
    return id
}

//Db üzerine ürün ekliyor.POST
function postProduct(data) {
    fetch("https://localhost:5001/api/product", {
        method: 'POST',
        body: JSON.stringify({
            productName: data.name,
            price: data.price,
            stock: data.stock,
            image: data.image,
            categoryId: data.category
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(resetInput())
}

//Ürün ekleme sayfasındaki textleri okur.
function readInput() {
    var data = {}
    data["name"] = document.querySelector("#nameInput").value
    data["price"] = document.querySelector("#priceInput").value
    data["stock"] = document.querySelector("#stockInput").value
    data["image"] = document.querySelector("#imageInput").value
    data["category"] = document.getElementById("categoryInput").options[document.getElementById("categoryInput").selectedIndex].id
    return data
}

//Ürün ekleme sayfasına categoryleri listeler
function getCategory() {
    let select = document.querySelector("#categoryInput")
    fetch("https://localhost:5001/api/category")
        .then(response => response.json())
        .then(res => {
            for (var i in res) {
                select.innerHTML += `<option id="${res[i].categoryId}"> ${res[i].categoryName} </option>`
            }
        })
}

//Ürün ekleme sayfasındaki textleri sıfırlar.
function resetInput() {
    document.querySelector("#nameInput").value = ""
    document.querySelector("#priceInput").value = ""
    document.querySelector("#stockInput").value = ""
    document.querySelector("#imageInput").value = ""
    document.getElementById("categoryInput").selectedIndex = 0
}