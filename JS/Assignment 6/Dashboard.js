import { showerror } from "./register.js";
import { collection, addDoc, auth, signOut, deleteUser, db, doc, deleteDoc, updateDoc, serverTimestamp, setDoc, where, query, onAuthStateChanged, getDocs } from "./firebaseauth.js";

let logoutbtn = document.querySelector("#logout");
let deletebtn = document.querySelector("#delete");
let render = document.querySelector("#render");
let postbtn = document.querySelector("#postbtn");
let postmodal = document.querySelector("#postmodal");
let closemodal = document.querySelector("#close");
let savepost = document.querySelector("#save");
let updatepost = document.querySelector("#update");
let postrender = document.querySelector("#renderposts");
let toggle = document.querySelector("#toggle");
let postarr = [];
let userarr = [];
let currentID = null;
let editid = null;


onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("Please Login First");
        window.location.replace("login.html");
    }
    else {
        currentID = user.uid;
        console.log("current id", currentID);
        getdata();
        getpostdata().then(() => {
            renderpost();
        })

    }
})

const renderr = () => {
    render.innerHTML = "";
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
    let confirmation = confirm("Are You Sure You Want Delete");
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
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            if (doc.id === currentID) {
                userarr.push(doc.data());
                // console.log(doc.id, " => ", doc.data());
                console.log(userarr);
            }
        })

        renderr();

    }
    catch (error) {
        console.error(error)
    }
}
// create post area
let createpost = () => {
    postmodal.style.display = "flex";
    savepost.style.display = "flex";
    closemodal.style.display = "flex";
    updatepost.style.display = "none";
    console.log(true);
}
postbtn.addEventListener("click", createpost);


closemodal.addEventListener("click", () => {
    postmodal.style.display = "none";
})

let savepostdata = async () => {
    let title = document.querySelector("#title").value;
    let des = document.querySelector("#story").value;
    try {
        const docRef = await addDoc(collection(db, "Posts"), {
            Title: title,
            Description: des,
            CreatedAT: new Date(),
            UID: currentID,
        });
        console.log("Document written with ID: ", docRef.id);
        await getpostdata();
        renderpost();
        postmodal.style.display = "none";
        updatepost.style.display = "none";
    }
    catch (error) {
        showerror(error.message);
    }
}
savepost.addEventListener("click", savepostdata);

let getpostdata = async () => {
    postarr = [];
    try {
        const postquery = query(collection(db, "Posts"), where("UID", "==", currentID));
        const querySnapshot = await getDocs(postquery);
        querySnapshot.forEach((doc) => {
            postarr = [
                ...postarr,
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ]
            console.log(postarr);
        });
        postarr.sort((a, b) => b.data.CreatedAT.toDate() - a.data.CreatedAT.toDate());
    }
    catch(error) {
        showerror(error.message);
    }
}

let renderpost = () => {
    postrender.innerHTML = "";
    postarr.map((post) => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="postcard">
        <h1> Title: ${post.data.Title}</h1>
        <p>description:${post.data.Description}</p>

        <div class="btnns">
        <button class="editbtn" data-id="${post.id}">Edit</button>
        <button class="deletebtn" data-id="${post.id}">Delete</button>
        </div>

        <div class="time">
        <p>${post.data.CreatedAT.toDate().toLocaleString()}</p>
        </div>
        </div>`;
        
        postrender.appendChild(div);
        let editbtn = div.querySelector(".editbtn");
        editbtn.addEventListener("click", () =>{
            let getid = editbtn.getAttribute("data-id");
            editdata(getid);
        });

        let deletebtn = div.querySelector(".deletebtn");
        deletebtn.addEventListener("click", async () => {
            let getid = deletebtn.getAttribute("data-id");
            deletepostdata(getid);
        });
    })
}
let editdata = (id) =>{
    console.log(id);
    let getpost = postarr.find((post) => post.id === id);
    console.log(getpost);
    document.querySelector("#title").value = getpost.data.Title;
    document.querySelector("#story").value = getpost.data.Description;
    postmodal.style.display = "flex";
    savepost.style.display = "none";
    updatepost.style.display = "flex";
    closemodal.style.display = "flex";

    editid = id;
}
let updatepostdata = async () => {
    let title = document.querySelector("#title").value;
    let des = document.querySelector("#story").value;

    if(!editid){
        showerror("Please Select Post First");
        return;
    }
    try{
        const docRef = doc(db, "Posts", editid);
        await updateDoc(docRef, {
            Title: title,
            Description: des,
            time: serverTimestamp(),  
        })
        await getpostdata();
        renderpost();
        postmodal.style.display = "none";
        updatepost.style.display = "none";
    }
    catch (error){
        showerror(error.message);
    }
}

updatepost.addEventListener("click", updatepostdata);


let deletepostdata = async (id) => {
    console.log(id);
    let confirmation = confirm("Are You Sure You Want Delete");
    if(confirmation){
        try{
            await deleteDoc(doc(db, "Posts", id));
            await getpostdata();
            renderpost();
        }
        catch(error){
            showerror(error.message);
        }
    }
}
