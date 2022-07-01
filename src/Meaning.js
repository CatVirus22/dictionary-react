import React from "react";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className="meanings">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-1">
          <div className="speech">{props.meaning.partOfSpeech}</div>
        </div>
        <div className="col-sm-11">
          <div className="definition">
            {props.meaning.definitions.map(function (definition, index) {
              return (
                <div key={index}>
                  <div className="definitions">{definition.definition}</div>
                  <div className="col-sm-6">
                    <p className="examples">{definition.example}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
