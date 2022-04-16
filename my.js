let selectRow = null;


function onFormSubmit() {
    let formData = readFormData();
    if(selectRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm()
}

let rad = readFormData();
localStorage.setItem(readFormData());

function readFormData () {
    var formData = {};
    formData["name"] = document.getElementById("name").value
    formData["city"] = document.getElementById("city").value
    formData["salary"] = document.getElementById("salary").value+"$"
    formData["business"] = document.getElementById("select1").value
    console.log(formData)
    return formData

    // return formData;
    
}


function insertNewRecord(data) {
    let table = document
    .getElementById("empList")
    .getElementsByTagName("tbody")[0];
    newRow = table.insertRow(table.length);
    stavka1 = newRow.insertCell(0);
    stavka1.innerHTML = data.name;
    stavka2 = newRow.insertCell(1);
    stavka2.innerHTML = data.city;
    stavka3 = newRow.insertCell(2);
    stavka3.innerHTML = data.salary;
    stavka4 = newRow.insertCell(3);
    stavka4.innerHTML = data.business;
    stavka5 = newRow.insertCell(4)
    stavka5.innerHTML = `<button id="promjena" onclick="onEdit(this)">Edit</button>`;
    stavka6 = newRow.insertCell(5)
    stavka6.innerHTML =  `<button id="promjena" onclick="Delete(this)">Delete</button>`
}


function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.name;
    selectRow.cells[1].innerHTML = formData.city;
    selectRow.cells[2].innerHTML = formData.salary;
    selectRow.cells[3].innerHTML = formData.business;
};



function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectRow.cells[0].innerHTML;
    document.getElementById("city").value = selectRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectRow.cells[2].innerHTML;
    document.getElementById("select1").value = selectRow.cells[3].innerHTML;
  }


function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("select1").value = "";
    selectRow = null;
}

// Dleteing Record--------------------------------------------------------------------------
function Delete(td) {
    if (confirm("Da li ste sigurni da zelite izbrisati podatke ?")) {
      row = td.parentElement.parentElement;
      document.getElementById("empList").deleteRow(row.rowIndex);
      resetForm();
    }
  }
  

