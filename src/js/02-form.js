const feedbackForm = document.querySelector(".feedback-form")

const emailInput = document.querySelector("input[name=email]");

const messageInput = document.querySelector("textarea[name=message]");

const localStorageKey = "feedback-form-state";


let feedback ={
    email: "",
    message: "",
};

try{
    feedback = JSON.parse(localStorage.getItem(localStorageKey));
    emailInput.value = feedback.email;
    messageInput.value = feedback.message;
}
catch(error){
    console.log(error.message);
}


feedbackForm.addEventListener("input", (event) => {
    if(event.target === emailInput){
        feedback.email = event.target.value.trim();
    }
    else{
        feedback.message = event.target.value.trim();
    }
})



feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if(feedback.email && feedback.message){
        localStorage.setItem(localStorageKey, JSON.stringify(feedback));
        feedbackForm.reset();
    }
    else{alert("ERROR, set a fields");}
})