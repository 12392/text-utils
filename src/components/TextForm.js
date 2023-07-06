import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "New text"; --> worng way
  //   setText("new text"); --> right way

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase has been enabled", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleaned", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase has been enabled", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("ExtraSpace has been Removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#152640",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#152640" : "white",
              color: props.mode === "dark" ? "white" : "#152640",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Clear Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#152640",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview"}</p>
      </div>
    </>
  );
}
