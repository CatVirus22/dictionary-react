import React from "react";
import "./App.css";
import Synonym from "./Synonym";

export default function Meaning(props) {
  return (
    <div className="meanings">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-2">
          <div className="speech">{props.meaning.partOfSpeech}</div>
        </div>
        <div className="col">
          <div className="definition">
            {props.meaning.definitions.map(function (definition, index) {
              return (
                <div key={index}>
                  <div className="definitions">{definition.definition}</div>
                  <p className="examples">{definition.example}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Synonym synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
