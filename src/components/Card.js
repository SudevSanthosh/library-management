import React from "react";
import "../App.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5>{props.title}</h5>
        <p>{props.postBody}</p>
      </div>

      <div className="card-footer">
        <div className="user">
          <div className="user-info">
            <h6>Created by </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
