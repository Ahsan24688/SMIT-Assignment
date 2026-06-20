import { collection,auth, signOut, deleteUser, db, doc, deleteDoc, onAuthStateChanged,getDocs } from "./firebaseauth.js";

let logoutbtn = document.querySelector("#logout");
let deletebtn = document.querySelector("#delete");
let renderr = document.querySelector("#render");
let userarr = [];

onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("Please Login First");
        window.location.replace("login.html");
    }
})

renderr = () => {
    userarr.map((user) => {
        let div = document.createElement("div");
        div.innerHTML = `<h1> Welcome ${user.name}</h1>`;
        render.appendChild(div);
    })
}

logoutbtn.addEventListener("click", async () => {
    try {
        await signOut(auth);
        console.log("User signed out successfully");
        window.location.replace("login.html")
    } catch (error) {
        console.error(error)
    }
})

deletebtn.addEventListener("click", async () => {
    let confirmation = confirm("Are You Sure You Want Delete")
    if (confirmation) {
        try {
            const user = auth.currentUser;

            if (user) {
                await deleteDoc(doc(db, "users", user.uid))
                await deleteUser(user);
                console.log("User deleted successfully");
                window.location.replace("index.html");
            }

        } catch (error) {
            console.error(error)
        }
    }
})

let getdata = async (user) => {
    try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            userarr.push(doc.data());
            // console.log(doc.id, " => ", doc.data());
            console.log(userarr);
        })
    }
    catch(error){
        console.error(error)
    }
}
getdata().then(() => {
    renderr();
});