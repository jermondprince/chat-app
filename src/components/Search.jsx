import React from "react";
import jermond from "../img/jermond.jpeg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={jermond} alt="jermond" />
        <div className="userChatInfo">
          <span>Jermond</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
