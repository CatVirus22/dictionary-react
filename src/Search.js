import React, { useState } from "react";
import "./App.css";

export default function Search() {
  let [input, setInput] = useState();

  function searching(event) {
    event.preventDefault();
    alert(`searching for ${input}`);
  }

  function inputUpdate(event) {
    setInput(event.target.value);
  }
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-6 search-bar pt-2 pb-4">
        <form className="input-group rounded pt-3" onSubmit={searching}>
          <input
            type="search"
            className="form-control rounded"
            id="search-input"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={inputUpdate}
          />
          <button
            className="btn search-button"
            type="submit"
            id="button-addon2"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
