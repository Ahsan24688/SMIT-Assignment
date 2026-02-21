
var Usersdata = [];

function add() {

    // var getid = document.getElementById("id").value;
   
    var getname = document.getElementById("name").value;
    var getage = document.getElementById("age").value;
    var getcity = document.getElementById("city").value;
    // var contact = document.getElementById("contact").value;

     var userinput ={
        id: (new Date().getTime() + Math.floor(Math.random()*100)),
        createddate: (new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()),
        username: getname,
        userage: getage,
        usercity: getcity,
    }

    var pushdata = document.getElementById("table_body");
    if (getname == "" && getage == "" && getcity == "") {
        alert("Please Enter a Data");
        return;
    }
    Usersdata.push(userinput);
    tablebody = `<tr>
                <td> ${userinput.id} </td>
                <td> ${userinput.username} </td>
                <td> ${userinput.userage} </td>
                <td> 
                     <button onClick="edituser(${userinput.id})" class="action_btn"> Edit </button>
                     <button onClick="deleteuser(${userinput.id})" class="action_btn"> Delete </button>
                </td>
                <td> ${userinput.createddate} </td>
                </tr>`;
    pushdata.innerHTML += tablebody;
    if(getname == getname && getage == getage && getcity == getcity){
        // document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("city").value = "";
        // document.getElementById("contact").value = "";
        return;
    }
}

