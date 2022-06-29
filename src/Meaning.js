import React from "react";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className="meanings pt-2 pb-2">
      <div className="speech pt-2 pb-2">{props.meaning.partOfSpeech}</div>
      <div className="definition">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definitions">{definition.definition}</div>
              <div>{definition.example}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
