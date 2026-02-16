
var Usersdata = [];

function add() {

    var getid = document.getElementById("id").value;
    var getname = document.getElementById("name").value;
    var getage = document.getElementById("age").value;
    var getcity = document.getElementById("city").value;
    var contact = document.getElementById("contact").value;

    var pushdata = document.getElementById("table_body");
    if (getid == "" && getname == "" && getage == "" && getcity == "" && contact == "") {
        alert("Please Enter a Data");
        return;
    }
    Usersdata.push(getid,getname, getage, getcity, contact);
    // console.log(Usersdata);
    tablebody = `<tr>
                <td> ${getid} </td>
                <td> ${getname} </td>
                <td> ${getage} </td>
                <td> ${getcity} </td>
                <td> ${contact} </td>
                </tr>`;
    tablebody.tr.td.style.padding = "10px";            
    pushdata.innerHTML += tablebody;
    if(getid == getid && getname == getname && getage == getage && getcity == getcity && contact == contact){
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("city").value = "";
        document.getElementById("contact").value = "";
        return;
    }
}

