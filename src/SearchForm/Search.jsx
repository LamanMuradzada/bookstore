import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const searchMovie = (e) => {
    e.preventDefault();
    navigate("/result/" + search.toLowerCase());
  };

  return (
    <>
      <div className="search">
        <form action="">
          <div className="search-form">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn" onClick={searchMovie}>
              <FiSearch />
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default Search;
