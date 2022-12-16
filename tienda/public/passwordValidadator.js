const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    if(!passwordConfirmation()){
        event.preventDefault();
    }
});

function passwordConfirmation() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password1").value;

    if(password.length < 8 || (confirmPassword.length < 8)){
        //document.getElementById("form").append('<div class="alert alert-danger" role="alert">Password must be 8 characters or more! Please change password</div>');
        document.getElementById('Error').innerHTML = '<div class="alert alert-danger" role="alert">Password must be 8 characters or more! Please change password</div>';
        return false;
        //alert("Password must be 8 characters or more! Please change password");
    } else {
        
        if (password == confirmPassword) {
            document.getElementById('Error').innerHTML = "<h3>Valid</h3>"
            return true;
            
            //alert("Valid");
        } else {
            document.getElementById('Error').innerHTML = "<h3>Please make sure your passwords match.</h3>"
            return false;
            //alert("Please make sure your passwords match.");
        }

    }  
}

