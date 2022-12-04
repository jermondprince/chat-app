import React from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jermond</span>
        <div className="chatIcons">
          <BsCameraVideoFill className="chatIcon" />
          <AiOutlineUserAdd className="chatIcon" />
          <MdMoreHoriz className="chatIcon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
