document.addEventListener("DOMContentLoaded", () => {

    //Elements inputs
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject" );
    const inputMessage = document.querySelector("#message");
    
    //fn Validateinputs
    const validateInputs = ((e) => {
        console.log(e.target.value);
    })
   
    //Events
    inputName.addEventListener("blur", validateInputs);
    inputEmail.addEventListener("blur", validateInputs);
    inputSubject.addEventListener("blur", validateInputs);
    inputMessage.addEventListener("blur", validateInputs);
})