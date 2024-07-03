import React, { useState } from "react";

export default function TextForm(props) {
  const removeSpace = (word) => {
    var count = 0;
    var splits = word.split(/\s+/);
    for (var i = 0; i < splits.length; i++) {
      if (splits[i] !== "") {
        count += 1;
      }
    }
    return count;
  };
  const handleUPClick = () => {
    //console.log("HandleUPCLick is invoked" + text.toUpperCase());
    let uppar = text.toUpperCase();
    setText(uppar);
    props.handleAlert("UpparCase Successful", "success");
  };
  const handleLOWClick = () => {
    //console.log("HandleUPCLick is invoked" + text.toUpperCase());
    let uppar = text.toLowerCase();
    setText(uppar);
    props.handleAlert("LowerCase Successful", "success");
  };
  const textCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.handleAlert("Copy Successful", "success");
  };
  const handleReverseString = () => {
    var ReveresedString = "";
    for (var i = text.length - 1; i >= 0; i--) {
      ReveresedString += text[i];
    }
    setText(ReveresedString);
  };
  const handleClearClick = () => {
    //console.log("HandleUPCLick is invoked" + text.toUpperCase());
    let clear = "";
    setText(clear);
    props.handleAlert("Clear Successful", "success");
  };
  const handleOnChange = (event) => {
    //console.log("onChange is invoked");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your Text");
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h1
            htmlFor="myBox"
            className="form-label"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1e183e",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUPClick}
        >
          CONVERT TO UPPARCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLOWClick}
        >
          convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleReverseString}
        >
          Reverse the Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={textCopyClick}
        >
          Copy the Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {removeSpace(text)} words, {text.length} characters{" "}
        </p>
        <h2>Preview</h2>
        <p>{removeSpace(text) > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
