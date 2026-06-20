
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "./firebaseauth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user);
        window.location.replace("quiz app.html");
    }
});

let Loginemail = document.querySelector("#Lnemail");
let Loginpassword = document.querySelector("#Lnpass");
let loginform = document.querySelector("#loginForm");

function validateform(){
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordregex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/

    let vali_Email = Loginemail.value.trim();
    let vali_Pass = Loginpassword.value.trim();


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

loginform.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        if (!validateform()) {
            console.error(new Error("Firstly, Please Create an Account"));
            return;
        }
        
        signInWithEmailAndPassword(auth, Loginemail.value, Loginpassword.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                window.location.replace("Dashboard.html");
            })

    }
    catch (error) {
        console.log(error);
    }
});