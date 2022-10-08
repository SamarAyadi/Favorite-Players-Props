import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <p className="info">{props.club}</p>
      </div>
    </div>
  );
}

export default Card;
