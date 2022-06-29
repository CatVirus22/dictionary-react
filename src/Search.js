import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results.js";

export default function Search() {
  let [input, setInput] = useState();
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
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
      <Results result={result} />
    </div>
  );
}
