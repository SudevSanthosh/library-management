import React from "react";
import { Header } from "../components/Header";
import { students } from "../assets/data";

const StudentList = () => {
  const data = JSON.parse(localStorage.getItem("bookHire"));

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 mt-2">Students List</h1>
          <table className="table-auto w-full border-collapse border border-gray-500">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Roll No</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Book Collected</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index + 1}
                  className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.roll_no}</td>
                  <td className="px-4 py-2">{student.department}</td>
                  {data ? (
                    <td className="px-4 py-2">
                      {data.find((book) => book.name === student.name)
                        ? data
                            .filter((book) => book.name === student.name)
                            .map((book) => (
                              <span key={book.id}>
                                <li>{book.value}</li>
                              </span>
                            ))
                        : "NIL"}
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentList;
