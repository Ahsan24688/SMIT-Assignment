import { auth, createUserWithEmailAndPassword, db, doc, setDoc, collection, getDocs, onAuthStateChanged, provider, signInWithPopup, GoogleAuthProvider } from "./firebaseauth.js";

let namee = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let Register = document.querySelector("#Register_form");
let modalcontainer = document.querySelector("#modal_container");
let modalmesg = document.querySelector("#Message");
let closebtn = document.querySelector("#close");
let uppercase = document.querySelector("#uppercase");
let specialchar = document.querySelector("#specialchar");
let number = document.querySelector("#number");
let length = document.querySelector("#length");
let googlebtn = document.querySelector("#googlebtn");

if (modalcontainer) {
    modalcontainer.style.display = "none";
}

export let showerror = (mesgs) => {
    let container = document.querySelector("#modal_container");
    let mesg = document.querySelector("#Message");
    if (container && mesg) {
        container.style.display = "flex";
        mesg.innerHTML = mesgs;
    }
}
if (closebtn) {
    closebtn.addEventListener("click", () => {
        modalcontainer.style.display = "none";

    })
}

if (password) {
    password.addEventListener("input", () => {
        let pass = password.value;

        uppercase.className = /[A-Z]/.test(pass) ? "check" : "uncheck";
        specialchar.className = /@/.test(pass) ? "check" : "uncheck";
        number.className = /[0-9]/.test(pass) ? "check" : "uncheck";
        length.className = pass.length >= 8 ? "check" : "uncheck";
    })
}

if (Register) {
    function validateform() {
        let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let passwordregex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@]).{8,}$/;

        let vali_Email = email.value.trim();
        let vali_Pass = password.value.trim();


        if (vali_Email === "" || vali_Pass === "") {
            // console.error(new Error("Please Fill all Fields"));
            showerror("Please Fill all Fields");
            return false;
        }
        if (!emailregex.test(vali_Email) || !passwordregex.test(vali_Pass)) {
            // console.error(new Error("Please Enter Valid Email and Password"));
            showerror("Please Enter Valid Email and Password");
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
                // console.error(new Error("Firstly, Please Create an Account"));
                // showerror("Firstly, Please Create an Account");
                return;
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
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
            showerror(error.message);
        }
    })
}

export let googlesignup = async () => {
    try {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential =  GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                console.log(token);
                console.log(credential)
                window.location.replace("Dashboard.html")
            })
        }
    catch (error) {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        console.log(credential);
        // showerror(error.message);
        }
    }
    if(googlebtn){
    googlebtn.addEventListener("click", (e)=> {
        e.preventDefault();
        googlesignup();
    });
    }


