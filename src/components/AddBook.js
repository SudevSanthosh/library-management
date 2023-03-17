import React from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";

const AddBook = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    about: "",
  });
  const selectedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [books, setBooks] = React.useState([]);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  const deleteItem = (value) => {
    setBooks((oldValues) => {
      return oldValues.filter((item) => item !== value);
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const bookData = {
      title: formData.title,
      about: formData.about,
    };
    setBooks((prevBooks) => [...prevBooks, bookData]);
    setFormData({ title: "", about: "" });
    localStorage.setItem("addedBooks", JSON.stringify([...books, bookData]));
  }

  const card = books.map((item, index) => {
    return (
      <>
        <div className="card" key={index}>
          <div className="card-body">
            <h5>{item.title}</h5>
            <p>
              <b>About the book : </b>
              {item.about}
            </p>
          </div>

          <div className="card-footer">
            <div className="user">
              {selectedUser && selectedUser.isStudent ? (
                <div>Get this book</div>
              ) : (
                <div className="user-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 cursor-pointer"
                    onClick={() => deleteItem(item)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  });
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
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            className="form-control mb-4"
            placeholder="About the book"
            id="form2"
            name="about"
            rows={2}
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
      <div className="post-list">{card}</div>
    </>
  );
};

export default AddBook;
