import React from "react";
import "./App.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-sm-2">
          <div className="synonym">Synonyms</div>
        </div>
        <div className="col">
          <ul className="synonyms">
            {props.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
