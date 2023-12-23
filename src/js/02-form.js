const feedbackForm = document.querySelector(".feedback-form")

const emailInput = document.querySelector("input[name=email]");

const messageInput = document.querySelector("textarea[name=message]");

const localStorageKey = "feedback-form-state";


let feedback ={
    email: "",
    message: "",
};

document.addEventListener("DOMContentLoaded", ()=> {
    const valueLocalStorage = localStorage.getItem(localStorageKey);
    try {
        if(valueLocalStorage) {
        feedback = JSON.parse(valueLocalStorage);
        emailInput.value = feedback.email;
        messageInput.value = feedback.message;}
    } catch (error) {
        console.log(error.message);
    }
})

feedbackForm.addEventListener("input", (event) => {
    feedback[event.target.name] = event.target.value.trim();
    try {
        localStorage.setItem(localStorageKey, JSON.stringify(feedback))
    } catch (error) {
        console.log(error.message);
    }
})



feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if(feedback.email && feedback.message){
        console.log(feedback);
        feedback.email = "";
        feedback.message = "";
        feedbackForm.reset();
        localStorage.removeItem(localStorageKey);
    }
    else{alert("ERROR, set a fields");}
})