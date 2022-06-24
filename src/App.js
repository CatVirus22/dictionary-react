import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6 header">
          <span className="title">Let's find your word </span>
          <img
            className="book"
            alt="book-pic"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/undefined/external-dictionary-online-education-flaticons-lineal-color-flat-icons.png"
            title="click to get icon"
          />
        </div>
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;
