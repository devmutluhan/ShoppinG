let buttons = {
    deleteBtn: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`
}
getCustomer();

//Müşterileri getirir ve listeler GET
function getCustomer() {
    let list = document.querySelector(".list")
    fetch("https://localhost:5001/api/customer")
        .then(response => response.json())
        .then(res => {
            list.innerHTML = " "
            for (var i in res) {
                list.innerHTML += `<li> <strong>Kullanıcı : </strong>${res[i].name +" "+ res[i].surname + " <strong>Email : </strong>" + res[i].email}  
                                        <span class="btn" onclick="deleteData(${res[i].customerId})"> ${buttons.deleteBtn}</span> </li>`
            }
        })
}

//Müşterileri siler DELETE
function deleteData(id) {
    fetch(`https://localhost:5001/api/customer/${id}`, {
        method:"DELETE",
    }).then(res => {
        console.log("Silme Başarılı")
        getCustomer();
    })
}