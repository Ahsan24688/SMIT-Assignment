import { auth, createUserWithEmailAndPassword, db, doc, setDoc, collection, getDocs } from "./firebaseauth.js";
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginform = document.querySelector("#loginForm");


let validateform = () => {
    if (email.value === "" || password.value === "" || email.value.length < 1 || password.value.length < 6) {
        console.error(new Error("Please Fill all Fields"));
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
            throw new Error("Firstly, Please Create an Account");
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