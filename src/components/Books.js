import React from "react";
import useGetApiData from "../hooks/useGetApiData";
import "../App.css";
import { useState } from "react";
import filterData from "../functions/getFilteredData";
import AddBook from "./AddBook";

export const Books = () => {
  const selectedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [filteredList, data, setFilteredList] = useGetApiData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const [searchQuery, setSearchQuery] = useState("");

  const deleteItem = (value) => {
    setFilteredList((oldValues) => {
      return oldValues.filter((item) => item !== value);
    });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  function getThisBook(book) {
    const newItem = { name: selectedUser.name, value: book.title };

    console.log(newItem);
    if (localStorage.getItem("bookHire")) {
      console.log(JSON.parse(localStorage.getItem("bookHire")));
      localStorage.setItem(
        "bookHire",
        JSON.stringify([JSON.parse(localStorage.getItem("bookHire")), newItem])
      );
    } else {
      localStorage.setItem("bookHire", JSON.stringify([newItem]));
    }
    setFilteredList((oldValues) => {
      return oldValues.filter((item) => item !== book);
    });
   alert("Book Added");
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const card = currentItems.map((item, index) => {
    return (
      <>
        <div className="card" key={index}>
          <div className="card-body">
            <h5>{item.title}</h5>
            <p>
              <b>About the book : </b>
              {item.body}
            </p>
          </div>

          <div className="card-footer">
            {selectedUser.isStudent ? (
              <div>
                <button onClick={() => getThisBook(item)}>
                  Get this book
                </button>
              </div>
            ) : null}
            <div className="user">
              {selectedUser.isStudent || selectedUser.isEmp ? null : (
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
      <div>
        <div class="flex justify-center mt-10">
          <div class="mb-3 xl:w-96">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-black-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-black outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search for books by title..."
                aria-label="Search"
                aria-describedby="button-addon1"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  const item = filterData(searchQuery, data);
                  setFilteredList(item);
                }}
              />
              <button
                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedUser.isEmp ? null : <AddBook />}

      <div className="post-list">{card}</div>
      <div className="flex justify-center mb-2">
        <button
          className="btn btn-primary"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button
          className="btn btn-primary ml-4"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};
