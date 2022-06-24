import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Search() {
  let [input, setInput] = useState();

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function searching(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function inputUpdate(event) {
    setInput(event.target.value);
  }

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-6 search-bar pt-2 pb-4">
        <form className="input-group rounded" onSubmit={searching}>
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
      <div className="col-sm-9 pb-3">
        <h1 className="result pt-3">daasasteicons</h1>
      </div>
    </div>
  );
}
