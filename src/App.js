import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Discussion from "./components/Discussion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121222";
      setAlert("Dark mode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been activated", "success");
    }
  };

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="React Training-1" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter your text to Analyse"
                  handleAlert={handleAlert}
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/Discussion" element={<Discussion mode={mode}/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
