function generatePassword(){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    
    for(let i = 0; i < 10; i++){
      let randomNumber = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomNumber);
    }

    document.getElementById("passwordBox").value = password;
    console.log("Generated Password: " + password);
  }