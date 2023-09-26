function enviar() {
    // Creating variables bescause of reciving data from inputs on html

    var inputFullName = document.getElementById("fullName").value;
    var inputBirthDate = document.getElementById("birthDate").value;
    var inputColor = document.getElementById("color").value;
    var inputEmail = document.getElementById("email").value;
    var inputSalaryIncome = document.getElementById("salaryIncome").value;
    var inputNumber = document.getElementById("number").value;
    var inputAvatar = document.getElementById("avatar").value;

    //Creating objects because of organizing the each user's data 
    var objUser = {
        "fullName": inputFullName,
        "birthDate": inputBirthDate,
        "color": inputColor,
        "email": inputEmail,
        "salaryIncome": inputSalaryIncome,
        "number": inputNumber,
        "avatar": inputAvatar
    };


    arrayUsers = loadData(objUser); //Download from Local Storage & edit data
    printTable(arrayUsers); // Print data on table
    localStorage.setItem("userData", JSON.stringify(arrayUsers)); //Load data on LocaStorage

    resetForm.click(); //Reseting the data on form
    
    


}

function loadData(object) {
    var arrayUsers = [];
    var userData = localStorage.getItem("userData");
    if (userData === null) {
        localStorage.setItem("userData", "[]");
    }
    else {
        arrayUsers = JSON.parse(userData);
    }
    arrayUsers.push(object);
    return arrayUsers;
}

function printTable(data) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>";
        html += "<td>" + data[i].fullName + "</td>";
        html += "<td>" + data[i].birthDate + "</td>";
        html += "<td>" + data[i].color + "</td>";
        html += "<td>" + data[i].email + "</td>";
        html += "<td>" + data[i].salaryIncome + "</td>";
        html += "<td>" + data[i].number + "</td>";
        html += "<td>" + data[i].avatar + "</td>";
        html += "</tr>";
    }
    bodyList.innerHTML = html;

}



function deleteData1() {
    localStorage.clear;
}



  



