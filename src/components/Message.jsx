import React from "react";
import jermond from "../img/jermond.jpeg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={jermond} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={jermond} alt="" />
      </div>
    </div>
  );
};

export default Message;
