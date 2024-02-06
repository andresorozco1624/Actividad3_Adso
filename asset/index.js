var avatarBase64 = null;


const forms = document.getElementById('registreForm');

forms.addEventListener('submit', event => {
    'use strict'
    if (!forms.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        console.log('Prevent Default')
        forms.classList.add('was-validated')

    }
    else {
        console.log('Formulario Enviado')
        forms.classList.remove('was-validated')
        event.preventDefault();
        event.stopPropagation();
        enviar();
        //forms.submit();
    }
});





function enviar() {
    // Creating variables bescause of reciving data from inputs on html

    var inputFullName = document.getElementById("fullName").value;
    var inputBirthDate = document.getElementById("birthDate").value;
    var inputColor = document.getElementById("color").value;
    var inputEmail = document.getElementById("email").value;
    var inputSalaryIncome = document.getElementById("salaryIncome").value;
    var inputNumber = document.getElementById("number").value;
    var inputAvatar = document.getElementById("avatar");
    var file = inputAvatar.files[0];
    getBase64(file);

    window.setTimeout(() => {
        //Creating objects because of organizing the each user's data 
        var objUser = {
            "fullName": inputFullName,
            "birthDate": inputBirthDate,
            "color": inputColor,
            "email": inputEmail,
            "salaryIncome": inputSalaryIncome,
            "number": inputNumber,
            "avatar": avatarBase64
        };


        arrayUsers = loadData(); //Download from Local Storage & edit data
        arrayUsers.push(objUser); // Add new data to saved data
        printTable(arrayUsers); // Print data on table
        localStorage.setItem("userData", JSON.stringify(arrayUsers)); //Load data on LocaStorage

        resetForm.click(); //Reseting the data on form


    }, 4000)

}


/*These fuctions and  comands helps to:
    download data(loadData)
    show data(printTable)
    delet data(deleteData)
    load data(when window loads) */
/*function loadData() {
    var arrayUsers = [];
    var userData = localStorage.getItem("userData");
    if (userData === null) {
        localStorage.setItem("userData", "[]");
    }
    else {
        arrayUsers = JSON.parse(userData);
    }

    return arrayUsers;
}*/

function printTable(data) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<th scope='row'>" + (i + 1) + "</th>";
        html += "<td>" + data[i].fullName + "</td>";
        html += "<td>" + data[i].bornDate + "</td>";
        html += "<td><div class= 'printColor' style= 'background-color:" + data[i].color + "'></div></td>";
        html += "<td>" + data[i].email + "</td>";
        html += "<td>" + "---"+ "</td>";
        html += "<td>" + data[i].phone + "</td>";
        html += "<td>" + "--" +  "</td>";
        html += "<td>"
        html += "<div data-1='" + i + "' class= 'eliminar'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3' viewBox='0 0 16 16'>";
        html += "<path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z'/></svg> ";
        html += "</div>";
        html += "<div data-1='" + i + "' class= 'editar'>"
        html += "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>"
        html += "<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'/>"
        html += "<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'/></svg>";
        html += "</div>";
        html += "</td>"

        html += "</tr>";
    }
    bodyList.innerHTML = html;
    var btnsEliminar = document.getElementsByClassName('eliminar');
    for (var i = 0; i < btnsEliminar.length; i++) {
        var btnEliminar = btnsEliminar[i];
        btnEliminar.addEventListener("click", (e) => {
            deleteOneregistre(e.target.getAttribute("data-1"));
        })
    }

}



function deleteData1() {
    if (confirm("¿Desea eliminar la información?")) {
        localStorage.clear();
        var arrayUsers = loadData(); //Download from Local Storage & edit data
        //printTable(arrayUsers); // Print data on table
    }
}

window.addEventListener("load", () => {
    console.log("La pagina cargo")
    var arrayUsers = loadData(); //Download from Local Storage & edit data
    //printTable(arrayUsers); // Print data on table
}
)




function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
        avatarBase64 = reader.result;
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
        return "";
    };
}



function deleteOneregistre(i) {
/*     var arrayUsers = loadData();
    if (i >= arrayUsers.length || i < 0) {
        alert("El elemento a eliminar no es valido");
        return;
    }
    if (confirm("¿Seguro que quieres eliminar " + arrayUsers[i].fullName + " de la lista?")) {
        var auxArrayUser = [];
        for (j = 0; j < arrayUsers.length; j++) {
            if (i != j) {
                auxArrayUser.push(arrayUsers[j]);
            }
        }
        jArray = JSON.stringify(auxArrayUser);
        printTable(auxArrayUser); // Print data on table
        localStorage.setItem("userData", jArray); //Load data on LocaStorage
    } */

    deleteDataById(i);
    printTable(data)


}


function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8082/user");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            printTable(data);

        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}


function deleteDataById(id){
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:8082/user/" +id);
    xhr.send();
    //xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            printTable(data);

        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };    
}
