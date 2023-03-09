import React from 'react';
import { Header } from '../components/Header';

const MyProfile = () => {
  const data = JSON.parse(localStorage.getItem('bookHire'));
  const selectedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userData = data.find((d) => d.name === selectedUser.name);

  return (
    <>
      <Header />
      {userData && (
        <div className="card">
          {/* <h2 className="card-title">{userData.title}</h2> */}
          <li className="card-body">{userData.value}</li>
        </div>
      )}
    </>
  );
};

export default MyProfile;
