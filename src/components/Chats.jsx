import React from "react";
import jermond from "../img/jermond.jpeg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={jermond} alt="jermond" />
        <div className="userChatInfo">
          <span>Jermond</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={jermond} alt="jermond" />
        <div className="userChatInfo">
          <span>Jermond</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={jermond} alt="jermond" />
        <div className="userChatInfo">
          <span>Jermond</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
