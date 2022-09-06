const { Button } = require("bootstrap");

// Global variables
var row = null;

function Submit() {
 var dataEntered = retrieveData();
 var readData = readDataFromLocalStorage(dataEntered);
 if (dataEntered == false) {
  msg.innerHTML = "Please Enter Data";
 } else {
  if (row == null) {
   insert(readData);
   msg.innerHTML = "Data Inserted";
  } else {
   update();
   msg.innerHTML = "Data Updated";
  }
 }
 document.getElementById('form').reset();
 // console.log(readData);
}

// CREATE
// Retrieving data from form
function retrieveData() {
 var username = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var track = document.getElementById('track').value;
 var group = document.getElementById('group').value;
 var isTeamLead = document.getElementById('isTeamLead').value;
 var isSuspended = document.getElementById('isSuspended').value;
 var isExpelled = document.getElementById('isExpelled').value;

 var arr = [username, email, track, group, isTeamLead, isSuspended, isExpelled];
 if (arr.includes("")) {
  return false;
 } else {
  return arr;
 }

} 
// READ
// Data in localStorage
function readDataFromLocalStorage(dataEntered) {
// Storing data in localStorage
var username = localStorage.setItem("Name", dataEntered[0]);
var email = localStorage.setItem("Email", dataEntered[1]);
var track = localStorage.setItem("Track", dataEntered[2]);
var group = localStorage.setItem("Group", dataEntered[3]);
var isTeamLead = localStorage.setItem("TeamLead", dataEntered[4]);
var isSuspended = localStorage.setItem("Suspend", dataEntered[5]);
var isExpelled = localStorage.setItem("Expelled", dataEntered[6]);

// Getting values from localStorage
var usernames = localStorage.getItem("Name", username);
var emails = localStorage.getItem("Email", email);
var tracks = localStorage.getItem("Track", track);
var groups = localStorage.getItem("Group", track);
var isTeamLeads = localStorage.getItem("TeamLead", isTeamLead);
var isSuspend = localStorage.getItem("Suspend", isSuspended);
var isExpell = localStorage.getItem("Expelled", isExpelled);

var arr = [usernames, emails, tracks, groups, isTeamLeads, isSuspend, isExpell];
return arr;
}

//INSERT
function insert(readData) {
 var row = table.insertRow(); // this will insert inputs in the table
row.insertCell(0).innerHTML = readData[0];
row.insertCell(1).innerHTML = readData[1];
row.insertCell(2).innerHTML = readData[2];
row.insertCell(3).innerHTML = readData[3];
row.insertCell(4).innerHTML = readData[4];
row.insertCell(5).innerHTML = readData[5];
row.insertCell(6).innerHTML = readData[6];
row.insertCell(7).innerHTML = `<button onclick = edit(this)>Edit</button>
                               <button onclick = remove(this)>Delete</button>`;
}

//EDIT
function edit(tbody) {
 row = tbody.parentElement.parentElement;
 document.getElementById('name').value = row.cells[0].innerHTML;
 document.getElementById('email').value = row.cells[1].innerHTML;
 document.getElementById('track').value = row.cells[2].innerHTML;
 document.getElementById('group').value = row.cells[3].innerHTML;
 document.getElementById('isTeamLead').value = row.cells[4].innerHTML;
 document.getElementById('isSuspended').value = row.cells[5].innerHTML;
 document.getElementById('isExpelled').value = row.cells[6].innerHTML;
}

//UPDATE
function update() {
 row.cells[0].innerHTML = document.getElementById('name').value;
 row.cells[1].innerHTML = document.getElementById('email').value;
 row.cells[2].innerHTML = document.getElementById('track').value;
 row.cells[3].innerHTML = document.getElementById('group').value;
 row.cells[4].innerHTML = document.getElementById('isTeamLead').value;
 row.cells[5].innerHTML = document.getElementById('isSuspended').value;
 row.cells[6].innerHTML = document.getElementById('isExpelled').value;

 row = null;
}
//DELETE
function remove(tbody) {
 var ans = confirm("Are you certain you want to delete this record?");
 if (ans == true) {
 row = tbody.parentElement.parentElement;
 document.getElementById('table').deleteRow(row.rowIndex);
 msg.innerHTML = "Data Deleted";
 }
 
}
// var selectedRow = null

// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["name"] = document.getElementById("name").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["track"] = document.getElementById("track").value;
//     return formData;
// }

// function insertNewRecord(data) {
//     var table = document.getElementById("table").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.fullName;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.email;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.salary;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.city;
//     cell4 = newRow.insertCell(4);
//     cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
// }

// function resetForm() {
//     document.getElementById("fullName").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("salary").value = "";
//     document.getElementById("city").value = "";
//     selectedRow = null;
// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("name").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("email").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("track").value = selectedRow.cells[2].innerHTML;
// }
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.name;
//     selectedRow.cells[1].innerHTML = formData.email;
//     selectedRow.cells[2].innerHTML = formData.track;
    
// }

// function onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("table").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }
// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }