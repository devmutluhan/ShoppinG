//Sayfadaki text inputları okur 
function readInput() {
    let data = {}
    data["name"] = document.querySelector("#nameInput").value
    data["surname"] = document.querySelector("#surnameInput").value
    data["phone"] = document.querySelector("#phoneInput").value
    data["address"] = document.querySelector("#addressInput").value
    data["email"] = document.querySelector("#emailInput").value
    data["password"] = document.querySelector("#passwordInput").value
    return data;
}

//Sayfadaki text inputların valuelerini temizler
function resetInput() {
    document.querySelector("#nameInput").value = ""
    document.querySelector("#surnameInput").value = ""
    document.querySelector("#phoneInput").value=""
    document.querySelector("#addressInput").value=""
    document.querySelector("#emailInput").value=""
    document.querySelector("#passwordInput").value=""
}

//Sayfada boş alan var mı diye kontrol eder
function validate(tableData) {
    if (tableData.name == "" && tableData.surname == "" && tableData.phone == "" &&
        tableData.address == "" && tableData.email == "" && tableData.password == "") { alert("Lütfen bütün alanları doldurunuz. ") }
    else {return true}
}

//Db üzerine Customer ekler.
function post() {
    var data = readInput()
    if (validate(data) == true) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("https://localhost:5001/api/customer", {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                surname: data.surname,
                phone: data.phone,
                address: data.address,
                email: data.email,
                password: data.password,
                type: "User"
            }),
            headers: myHeaders
        }).then(response => response.json())
            .then(res => {
                alert(res);
                resetInput();
            })
    }
}
