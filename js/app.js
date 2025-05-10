document.addEventListener("DOMContentLoaded", () => {

    //Elements inputs
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject" );
    const inputMessage = document.querySelector("#message");
    const contactForm = document.querySelector("#contactForm");
    
    //fn Validateinputs
    const validateInputs = ((e) => {
        console.log(e.target.parentElement);
        if(e.target.value.trim() === ""){
            showalert(` ${e.target.id} field is required`, e.target.parentElement);
        }else {
            console.log("Si hay algo")
        }
    })
   
    //Events
    inputName.addEventListener("blur", validateInputs);
    inputEmail.addEventListener("blur", validateInputs);
    inputSubject.addEventListener("blur", validateInputs);
    inputMessage.addEventListener("blur", validateInputs);

    const showalert = ((message, referencia) => {
        //Alert on Html
        const error = document.createElement("P");
        error.textContent = message;
        error.classList.add("error-message");
        
        //Inject the error into the form
        referencia.appendChild(error);

    })
})