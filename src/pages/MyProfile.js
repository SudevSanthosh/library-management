import React, { useState } from "react";
import { Header } from "../components/Header";

const MyProfile = () => {
  const [userData, setUserData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("bookHire")) || [];
    const selectedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return data.filter((d) => d.name === selectedUser?.name);
  });

  const handleReturn = (book) => {
    const updatedData = userData.filter(
      (d) => !(d.name === book.name && d.value === book.value)
    );
    setUserData(updatedData);
    localStorage.setItem("bookHire", JSON.stringify(updatedData));
  };

  return (
    <>
      <Header />
      <h2 className="mt-4 text-center"> Your books</h2>
      {userData.length < 1 ? (
        <div className="mt-4 text-center">No data found </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {userData.map((book) => (
            <div
              key={book.value}
              className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.value}</div>

                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-2"
                  onClick={() => handleReturn(book)}
                >
                  Return
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyProfile;
