import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { getUserValidation } from "../functions/getUserValidation";

function LoginForm() {
  const [formData, setFormData] = React.useState({
    userName: "",
    passWord: "",
  });

  const navigate = useNavigate();
  const options = ["Admin", "Librarian", "Student"];
  const [error, setError] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('Admin');
  const isAuthenticated = getUserValidation(formData, selectedOption);
  
  function handleSubmit(event) {
    event.preventDefault();
    setError(true);

    if (isAuthenticated.err === false) {
      navigate("/welcomePage");
    }
  }

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
    
  };

  function handleChange(event) {
    setError(false);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <h1 className="text-center mt-20"> Welcome to Central Library</h1>

      <form onSubmit={handleSubmit}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            type="email"
            name="userName"
            onChange={handleChange}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            type="password"
            label="Password"
            id="form2"
            name="passWord"
            value={formData.passWord}
            onChange={handleChange}
            required
          />
          <div className="mb-4">
            <label htmlFor="dropdown">Select user type : </label>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleOptionSelect}
              className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <Button as="input" type="submit" value="Sign in " />
          {error ? (
            <div className="text-center text-red-700 mt-4 font-bold ">
              <p>{isAuthenticated.errorMessage}</p>
            </div>
          ) : null}
        </MDBContainer>
      </form
      
      
      >
    </>
  );
}

export default LoginForm;
