import { collection, addDoc, db, getDocs, deleteDoc, doc, setDoc } from "./firebaseconfig.js";
var Usersdata = [];
var CurrentID = null;

var addbtn = document.getElementById("add-data");

// function getdata() {
//     var tododata = window.localStorage.getItem("Usersdata");
//     if (tododata) {
//         Usersdata = JSON.parse(tododata);
//     }
//     refreshdata();
// }
// getdata();

window.getdata = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "cities"));
        Usersdata = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            Usersdata.push({
                id: doc.id,
                ...doc.data()

            })
        });
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
}
getdata().then(() => {
    refreshdata();
});
function refreshdata() {
    var pushdata = document.getElementById("table_body");
    pushdata.innerHTML = "";
    for (var i = 0; i < Usersdata.length; i++) {
        var table_color = "";
        if (Usersdata[i].status == "Pending") {
            table_color = "red";
        }
        else {
            table_color = "green";
        }
        pushdata.innerHTML += `<tr class="${table_color}">
                <td> ${Usersdata[i].id} </td>
                <td> ${Usersdata[i].username} </td>
                <td> ${Usersdata[i].userage} </td>
                <td> ${Usersdata[i].usercity} </td>
                <td> 
                     <button onClick="edituser('${Usersdata[i].id}')" class="action_btn"> Edit </button>
                     <button onClick="deleteuser('${Usersdata[i].id}')" class="action_btn"> Delete </button>
                </td>
                <td> ${Usersdata[i].createddate} </td>
                <td> ${Usersdata[i].status} </td>
                </tr>`;
    }


}
addbtn.addEventListener("click", async () => {

    var getname = document.getElementById("name").value;
    var getage = document.getElementById("age").value;
    var getcity = document.getElementById("city").value;
    var getstatus = document.getElementById("status").value;

    if (getname == "" || getage == "" || getcity == "" || getstatus == "") {
        alert("Please Enter a Data");
        return;
    }
    // Add a new document with a generated id.
    try {
        const docRef = await addDoc(collection(db, "cities"), {

            // id: (new Date().getTime() + Math.floor(Math.random() * 50)),
            createddate: (new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()),
            username: getname,
            userage: getage,
            usercity: getcity,
            status: getstatus
        });
        console.log("Document written with ID: ", docRef.id);
        refreshdata();
        await getdata();
        clearall();
    }
    catch (error) {
        console.error("Error adding document: ", error);
    };


    // Usersdata.push(userinput);
    // window.localStorage.setItem("Usersdata", JSON.stringify(Usersdata));
});


function clearall() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
}

window.deleteuser = async (id) => {
    // console.log(id);
    try {
        await deleteDoc(doc(db, "cities", id));
        await getdata();
        refreshdata();
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
    // window.localStorage.setItem("Usersdata", JSON.stringify(Usersdata));

}

window.edituser = (id) => {
    CurrentID = id;
    // console.log(id);

    let currentdata = Usersdata.find((data) => data.id == id);
    if (currentdata) {
        document.getElementById("name").value = currentdata.username;
        document.getElementById("age").value = currentdata.userage;
        document.getElementById("city").value = currentdata.usercity;
        document.getElementById("status").value = currentdata.status;
    }


    var updatebtn = document.getElementById("update");
    addbtn.disabled = true;
    updatebtn.disabled = false;
}

window.updateuser = async (id) => {
    var getname = document.getElementById("name").value;
    var getage = document.getElementById("age").value;
    var getcity = document.getElementById("city").value;
    var getstatus = document.getElementById("status").value;

    if (!CurrentID) {
        alert("No user selected for update.");
        return;
    }
    try {
        // Add a new document in collection "cities"
        await setDoc(doc(db, "cities", CurrentID), {
             username: getname,
            userage: getage,
            usercity: getcity,
            status: getstatus
        });

        await window.getdata();
        refreshdata();
        clearall();

        var updatebtn = document.getElementById("update");
        addbtn.disabled = false;
        updatebtn.disabled = true;
        CurrentID = null;

    } catch (error) {
        console.error("Error adding document: ", error);
    }

    // window.localStorage.setItem("Usersdata", JSON.stringify(Usersdata));

}

function deleteall() {
    Usersdata = [];
    window.localStorage.removeItem("Usersdata");
    refreshdata();
}
