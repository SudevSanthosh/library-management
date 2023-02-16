import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBInput} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    console.log("form submission");
    console.log(formData.userName);
    console.log(formData.passWord);
    navigate("/welcomePage");
  }
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  const [formData, setFormData] = React.useState({
    userName: "",
    passWord: "",
  });
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
          <Button
            as="input"
            type="submit"
            value="Sign in "
            bsClass="bg-sky-600"
          />
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
