import React from "react";
import { IoMdAttach } from "react-icons/io";
import { FaRegFileImage } from "react-icons/fa";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <IoMdAttach className="inputIcon" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FaRegFileImage className="inputIcon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
