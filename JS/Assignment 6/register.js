import { auth, createUserWithEmailAndPassword, db, doc, setDoc, collection, getDocs, onAuthStateChanged } from "./firebaseauth.js";

let namee = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let Register = document.querySelector("#Register_form");


function validateform(){
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordregex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/

    let vali_Email = email.value.trim();
    let vali_Pass =password.value.trim();


    if (vali_Email === "" || vali_Pass === "" ) {
        console.error(new Error("Please Fill all Fields"));
        return false;
    }
    if (!emailregex.test(vali_Email) || !passwordregex.test(vali_Pass)) {
        console.error(new Error("Please Enter Valid Email and Password"));
        return false;
    }
    else {
        return true;
    }
}


Register.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        if (!validateform()) {
            console.error(new Error("Firstly, Please Create an Account"));
            return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth,email.value, password.value)
        const user = userCredential.user;
        console.log("User Created Successfully", user);

        
        await setDoc(doc(db, "users", user.uid), {
            name: namee.value,
            email: user.email,
            uid: user.uid,
            createdAt: new Date()
        });
        
        window.location.replace("Dashboard.html");

    }
    catch (error) {
        console.log(error);
    }
})

