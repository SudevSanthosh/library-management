import { admin, students } from "../assets/data";
import { employees } from "../assets/data";

export const getUserValidation = (formData, option) => {
  const errors = {};
  const enteredUsername = formData.userName;
  const enteredPassword = formData.passWord;


  let matchFound = false;

  switch (option) {
    case "Admin":
      admin.forEach((item) => {
        if (
          item.email === enteredUsername &&
          item.password === enteredPassword &&
          item.isAdmin === true
        ) {
          localStorage.setItem("loggedInUser", JSON.stringify(item));
          matchFound = true;
        }
      });
      if (matchFound) {
        errors.err = false;
      } else {
        errors.errorMessage = "Invalid Username/Password or Usertype";
      }
      break;

    case "Librarian":
      employees.forEach((item) => {
        if (
          item.email === enteredUsername &&
          item.password === enteredPassword &&
          item.isEmp === true
        ) {
          localStorage.setItem("loggedInUser", JSON.stringify(item));
          matchFound = true;
        }
      });
      if (matchFound) {
        errors.err = false;
      } else {
        errors.errorMessage = "Invalid Username/Password or Usertype";
      }
      break;

    case "Student":
      students.forEach((item) => {
        if (
          item.email === enteredUsername &&
          item.password === enteredPassword &&
          item.isStudent === true
        ) {
          localStorage.setItem("loggedInUser", JSON.stringify(item));
          matchFound = true;
        }
      });
      if (matchFound) {
        errors.err = false;
      } else {
        errors.errorMessage = "Invalid Username/Password or Usertype";
      }
      break;

    default:
      return errors;
  }
  return errors;
};
