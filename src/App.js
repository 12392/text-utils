// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#152640";
      showAlert("Darkmode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
