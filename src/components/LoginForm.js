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
  const [selectedOption, setSelectedOption] = React.useState("Admin");
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
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-10">
        <h1 className="text-center text-4xl mb-10 font-bold text-blue-800">
          Welcome to Central Library
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <MDBContainer className="p-3 my-5 d-flex flex-column">
            <MDBInput
              wrapperClass="mb-4"
              labelClass="font-bold"
              label="Email address"
              id="form1"
              type="email"
              name="userName"
              onChange={handleChange}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              labelClass="font-bold"
              type="password"
              label="Password"
              id="form2"
              name="passWord"
              value={formData.passWord}
              onChange={handleChange}
              required
            />
            <div className="mb-4">
              <label htmlFor="dropdown" className="font-bold">
                Select user type:
              </label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionSelect}
                className="ml-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <Button
              as="input"
              type="submit"
              value="Sign in"
              className="w-full text-white font-bold py-2.5 rounded-lg bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
            />
            {error ? (
              <div className="text-center text-red-700 mt-4 font-bold ">
                <p>{isAuthenticated.errorMessage}</p>
              </div>
            ) : null}
          </MDBContainer>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;