document.addEventListener("DOMContentLoaded", () => {

    //Elements inputs
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject" );
    const inputMessage = document.querySelector("#message");
    const contactForm = document.querySelector("#contactForm");
    
    //fn Validateinputs
    const validateInputs = ((e) => {
        if(e.target.value.trim() === ""){
            showalert(`${e.target.id} field is required`, e.target.parentElement);
            return;
        }
        if(e.target.id === "email" && !validateEmail(e.target.value)) {
            showalert("Invalid email address", e.target.parentElement)
            return;
        };
        cleanAlert(e.target.parentElement);
    })
   
    //Events
    inputName.addEventListener("blur", validateInputs);
    inputEmail.addEventListener("blur", validateInputs);
    inputSubject.addEventListener("blur", validateInputs);
    inputMessage.addEventListener("blur", validateInputs);

    const showalert = ((message, reference) => {
        cleanAlert(reference);

        //Alert on Html
        const error = document.createElement("P");
        error.textContent = message;
        error.classList.add("error-message");
        
        //Inject the error into the form
        reference.appendChild(error);

    })

    const cleanAlert  = ((reference) => {
        // check if an alert already exists
        const alerta = reference.querySelector(".error-message");
        if(alerta) {
            alerta.remove();
        }
    });

    const validateEmail = ((email) => {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const result = regex.test(email);
        return result;
    })
})