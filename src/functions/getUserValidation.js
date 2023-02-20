import { admin } from "../assets/admin";

export const getUserValidation = (formData) => {
    console.log(admin)
    const errors = {};
    const enteredUsername = formData.userName;
    const enteredPassword = formData.passWord;


    console.log(enteredUsername, enteredPassword)
  
    admin.forEach((item) => {
      if (item.email !== enteredUsername || item.password !== enteredPassword) {
        
        errors.errorMessage = "Invalid username or password";
      } else {
        localStorage.setItem("loggedInUser", JSON.stringify(item));
     
      
        errors.err = false;
      }
    });
    return errors;
  };