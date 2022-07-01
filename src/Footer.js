import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div
      className="row d-flex justify-content-center navbar-fixed-bottom pb-3"
      data-ride="carousel"
    >
      <div className="col-sm-9 pt-5">
        <div className="coder">
          <a
            href="https://github.com/CatVirus22/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by: </span>
          <img
            className="kat"
            src="https://img.icons8.com/stickers/50/000000/cat.png"
            alt="cade-cat"
          />
          <span className="coderName"> Marizabelle Aldana</span>
          <span> hosted on: </span>
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
          <span> using cute icons from: </span>
          <a href="https://icons8.com/" target="_blank" rel="noreferrer">
            Icons8.
          </a>
        </div>
      </div>
    </div>
  );
}
