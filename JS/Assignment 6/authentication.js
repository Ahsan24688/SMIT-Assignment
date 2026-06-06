import { auth, createUserWithEmailAndPassword, db, doc, setDoc, collection, getDocs } from "./firebaseauth.js";
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginform = document.querySelector("#loginForm");


let validateform = () => {
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

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


loginform.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        if (!validateform()) {
            console.error(new Error("Firstly, Please Create an Account"));
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
        const user = userCredential.user;
        console.log("User Created Successfully", user);

        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            createdAt: new Date()
        });
        window.location.href = "Quiz app.html";

    }
    catch (error) {
        console.log(error);
    }
})