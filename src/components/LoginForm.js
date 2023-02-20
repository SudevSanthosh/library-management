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

  function handleSubmit(event) {
    event.preventDefault();
    const isAuthenticated = getUserValidation(formData);
    console.log(isAuthenticated);

    if (isAuthenticated.err === false) {
      navigate("/welcomePage");
      console.log(isAuthenticated);
    }
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
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

          <Button as="input" type="submit" value="Sign in " />
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </MDBContainer>
      </form>
    </>
  );
}

export default LoginForm;
