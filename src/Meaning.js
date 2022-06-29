import React from "react";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className="meanings">
      <div className="speech pt-2 pb-2">{props.meaning.partOfSpeech}</div>
      <div className="definition">
        {props.meaning.definitions[0].definition}
      </div>
      <div className="example">{props.meaning.definitions[0].example}</div>
    </div>
  );
}
