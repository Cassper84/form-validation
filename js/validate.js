const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2  = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

const setError = (input, message) =>{
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector("#errorMessage");
    errorDisplay.innerText = message;
    formControl.className = 'form-control error';
};
const setSuccess = input => {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector("#errorMessage");
    errorDisplay.innerText = "";
    formControl.className = 'form-control success';
    
};



const checkInput = () => {
    // Get the values from the input
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
    const password2Value = password2.value.trim(); 

    if (usernameValue === ""){
        setError(username, "Username can not be blank");
    }
    else if(usernameValue.length < 6){
        setError(username, "Username must be atleast 6 characters long")
    }
    else if(!isNaN(usernameValue)){
        setError(username, "Not a valid username");
    }
    else{
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Email can not be blank");
    }
    else{
        setSuccess(email);
    }
    if (passwordValue === "") {
        setError(password, "Please fill in your password");
    }
    else if(passwordValue.length < 6){
        setError(password, "Password must be atleast 6 characters long")
    }
    else{
        setSuccess(password);
    }
    if (password2Value === "") {
        setError(password2, "Please confirm your password");
    } 
    else if(password2Value !== passwordValue){
        setError(password2, "Password do not match");
    }
    else {
        setSuccess(password2, "password2ErrorMessage"); // Pass the correct error message ID
    }
    
    
};
