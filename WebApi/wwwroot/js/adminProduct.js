let buttons = {
    deleteBtn: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`,
    updateBtn:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>`
}
getProduct()

//Db üzerinde ki ürünleri getirir GET
function getProduct() {
    let list = document.querySelector(".list")
    fetch("https://localhost:5001/api/product")
        .then(response => response.json())
        .then(res => {
            list.innerHTML = ""
            for (var i in res) {
                list.innerHTML += `<li> <strong>Ürün adı : </strong>${res[i].productName + " <strong>Stok: </strong>" + res[i].stock}  
                                        <span class="btn" onclick="deleteData(${res[i].productId})"> ${buttons.deleteBtn}</span>
                                        <span class="btn" onclick="updateData(${res[i].productId})"> ${buttons.updateBtn}</span> </li>`
            }
        })
}

//Db üzerinden ürün siler DELETE
function deleteData(id) {
    fetch(`https://localhost:5001/api/product/${id}`, {
        method: 'DELETE',
    }).then(res => {
        getProduct()
    })
}

//Db üzerinde veriyi günceller UPDATE
function updateData(id) {
    sessionStorage.setItem("Product", id)
    window.location.href = "https://localhost:5001/Addproduct"
}