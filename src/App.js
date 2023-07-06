// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// components
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us"></Navbar>
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
