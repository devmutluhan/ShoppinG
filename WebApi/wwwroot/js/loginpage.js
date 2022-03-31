function readInput() {
    var data = {
        email: document.querySelector("#emailInput").value,
        password: document.querySelector("#passwordInput").value
    }
    return data;
}

function getItems() {
    var data = readInput();
    fetch("https://localhost:5001/api/customer")
        .then(response => response.json())
        .then(res => {
            for (var i in res) {
                if (res[i].email == data.email) {
                    if (res[i].password == data.password) {
                        sessionStorage.setItem("User", res[i].customerId)
                        window.location.href = "https://localhost:5001"
                    }
                    else {
                        alert("Şifre hatalı");
                    }
                }
            }
        })
}