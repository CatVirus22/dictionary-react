import React from "react";
import "./App.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-sm-9 pe-0 ps-0">
          <h1 className="result">{props.result.word}</h1>
          <div className="phonetic">{props.result.phonetic}</div>
          <div className="meanings pt-3">
            {props.result.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
