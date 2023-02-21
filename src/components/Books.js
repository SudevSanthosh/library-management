import React from "react";
import useGetApiData from "../hooks/useGetApiData";
import Card from "./Card";
import "../App.css";
import { useState } from "react";
export const Books = () => {
  const [books] = useGetApiData("https://jsonplaceholder.typicode.com/posts");
  const [filteredList, setFilteredList] = useState(books);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value.toUpperCase();
    setSearchQuery(query);

    const searchList = books.filter((item) => {
    const name = item.title.toUpperCase();
    return name.includes(searchQuery);

      // return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(searchList);
  };
  console.log("list:" , filteredList);

  const card = filteredList.map((item) => {
    return (
      <>
        <Card
          postid={item.id}
          title={item.title}
          username={item.userId}
          postBody={item.body}
        />
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
                onChange={handleSearch}
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

      <div className="post-list">{card}</div>
    </>
  );
};
