document.addEventListener("DOMContentLoaded", () => {
    const email = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }
    

    //Elements inputs
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject" );
    const inputMessage = document.querySelector("#message");
    const contactForm = document.querySelector("#contactForm");
    const buttonSubmit = document.querySelector('#contactForm button[type="submit"]');
    const spinner = document.querySelector("#spinner");

    
    //fn Validateinputs
    const validateInputs = ((e) => {
        if(e.target.value.trim() === ""){
            showalert(`${e.target.id} field is required`, e.target.parentElement);
            email[e.target.name] = "";
            checkEmail();
            return;
        }
        if(e.target.id === "email" && !validateEmail(e.target.value)) {
            showalert("Invalid email address", e.target.parentElement)
            email[e.target.name] = "";
            checkEmail();
            return;
        };
        cleanAlert(e.target.parentElement);

        //assign values ​​to the object
        email[e.target.name] = e.target.value.trim().toLowerCase();
        // console.log(email);

        checkEmail()

    })

    const showalert = ((message, reference) => {
        cleanAlert(reference);

        //Alert on Html
        const error = document.createElement("P");
        error.textContent = message;
        error.classList.add("error-message");
        
        //Inject the error into the form
        reference.appendChild(error);

    })

    const cleanAlert  = (reference) => {
        // check if an alert already exists
        const alerta = reference.querySelector(".error-message");
        if(alerta) {
            alerta.remove();
        }
    };

    const validateEmail = (email) => {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const result = regex.test(email);
        return result;
    }

    const checkEmail = (() => {
        if(Object.values(email).includes("")) {
            buttonSubmit.classList.remove("enabled");
        } else {
            buttonSubmit.classList.add("enabled");
            
        }
    })

    //Simulator send message or emails
    const sendEmail = (e) => {
        e.preventDefault();
        
        spinner.classList.add("show");
        setTimeout(() => {
            spinner.classList.remove("show");

            // cleanOcject Email
            email.name = "";
            email.email = "";
            email.subject = "";
            email.message = "";

            contactForm.reset()

            //Create alert
            const alertExit = document.createElement("P")
            alertExit.classList.add("parrafo");
            alertExit.textContent = "Mensaje enviado correctamente"

            contactForm.appendChild(alertExit);

            setTimeout(() => {
                alertExit.remove();
            }, 3000);
        }, 3000);

    }

    //Events
    inputName.addEventListener("input", validateInputs);
    inputEmail.addEventListener("input", validateInputs);
    inputSubject.addEventListener("input", validateInputs);
    inputMessage.addEventListener("input", validateInputs);
    contactForm.addEventListener("submit", sendEmail);
    
})