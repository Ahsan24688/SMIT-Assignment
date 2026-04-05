
var Usersdata = [];
var CurrentID = null;

function refreshdata(){
    var pushdata = document.getElementById("table_body");
    pushdata.innerHTML = "";
    for (var i = 0; i < Usersdata.length; i++) {
    pushdata.innerHTML += `<tr>
                <td> ${Usersdata[i].id} </td>
                <td> ${Usersdata[i].username} </td>
                <td> ${Usersdata[i].userage} </td>
                <td> 
                     <button onClick="edituser(${Usersdata[i].id})" class="action_btn"> Edit </button>
                     <button onClick="deleteuser(${Usersdata[i].id})" class="action_btn"> Delete </button>
                </td>
                <td> ${Usersdata[i].createddate} </td>
                </tr>`;
    }
}
function add() {

    var getname = document.getElementById("name").value;
    var getage = document.getElementById("age").value;
    var getcity = document.getElementById("city").value;

    var userinput ={
        id: (new Date().getTime() + Math.floor(Math.random()* 50)),
        createddate: (new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()),
        username: getname,
        userage: getage,
        usercity: getcity,
    }

    if (getname == "" || getage == "" || getcity == "") {
        alert("Please Enter a Data");
        return;
    }
    Usersdata.push(userinput);
    refreshdata();
    clearall();
    
        
        
    
}
function clearall(){
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("city").value = "";
}

function deleteuser(id){
    // console.log(id);
    for (var i=0; i < Usersdata.length; i++) {
        if (Usersdata[i].id == id){
            Usersdata.splice(i,1);
            break;
        }
}
    refreshdata();
    
}

function edituser(id){
    CurrentID = id;
    console.log(id);
    for (var i=0; i < Usersdata.length; i++){
        if (Usersdata[i].id == id){
            document.getElementById("name").value = Usersdata[i].username;
            document.getElementById("age").value = Usersdata[i].userage;
            document.getElementById("city").value = Usersdata[i].usercity;
            break;
        }
    }
}

function updateuser(id){
    var getname = document.getElementById("name").value;
    var getage = document.getElementById("age").value;
    var getcity = document.getElementById("city").value;
    for (var i=0; i < Usersdata.length; i++){
        if (Usersdata[i].id == CurrentID){
            Usersdata[i].username = getname;
            Usersdata[i].userage = getage;
            Usersdata[i].usercity = getcity;
            break;
        }
}
    refreshdata();
    clearall();
    CurrentID = null;
}
