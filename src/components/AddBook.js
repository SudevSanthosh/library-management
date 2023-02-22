import React from "react";

import { MDBContainer, MDBInput } from "mdb-react-ui-kit";

const AddBook = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    about: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <MDBContainer className="p-3 my-5 d-flex flex-column">
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Enter the title of the book"
            place
            id="form1"
            type="text"
            name="title"
            onChange={handleChange}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="About the book"
            type="text"
            id="form2"
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
          />
          <button
            class="bg-primary font-bold py-2 px-4 rounded  flex justify-center w-100 text-white "
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>

            <span>+Add book </span>
          </button>
        </MDBContainer>
      </form>
    </>
  );
};

export default AddBook;
