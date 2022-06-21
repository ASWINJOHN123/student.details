var selectedRow = null;
function onformsubmit(e){
    event.preventDefault();
    var formData = readformData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{

    }
}
//the data details
function readformData(){
    var formData = {};
    formData["fname"] = document.getElementById("fname").Value;
    formData["lname"] = document.getElementById("lname").Value;
    formData["date"] = document.getElementById("date").Value;
    formData["gmail"] = document.getElementById("gmail").Value;
    formData["phoneno"] = document.getElementById("phoneno").Value;
    formData["gender"] = document.getElementById("gender").Value;
    formData["address"] = document.getElementById("address").Value;
    formData["class"] = document.getElementById("class").Value;
    formData["Division"] = document.getElementById("Division").Value;
    formData["hobby"] = document.getElementById("hobby").Value;
    return formData;
}

//------
function insertNewRecord(data){
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.lenght);
    var cell1 = newrow.insertCell(0)
        cell1.innerHTML = data.fname;
    var cell2 = newrow.insertCell(1)
        cell2.innerHTML = data.lname;
    var cell3 = newrow.insertCell(2)
        cell3.innerHTML = data.date;
    var cell4 = newrow.insertCell(3)
        cell4.innerHTML = data.gmail;
    var cell5 = newrow.insertCell(4)
        cell5.innerHTML = data.phoneno;
    var cell6 = newrow.insertCell(5)
        cell6.innerHTML = data.gender;
    var cell7 = newrow.insertCell(6)
        cell6.innerHTML = data.address;
    var cell8 = newrow.insertCell(7)
        cell7.innerHTML = data.class;
    var cell9 = newrow.insertCell(8)
        cell8.innerHTML = data.Division;
    var cell10 = newrow.insertCell(9)
        cell9.innerHTML = data.hobby;
    var cell10 = newrow.insertCell(11)
        cell11.innerHTML = '<button>edit</button> <button>delete</button>'
            

}