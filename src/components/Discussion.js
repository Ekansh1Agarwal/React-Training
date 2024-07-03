import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#121222",
    backgroundColor: props.mode === "dark" ? "#121222" : "white",
    // border: '2px solid',
    // borderColor: props.mode === 'dark'?'white': '#121222'
  };

  return (
    <>
      <div className="container">
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "#121222" }}
        >
          Topics Discussed
        </h1>
      </div>
      <div className="accordion my-3" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
            >
              Day #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Create React Application: </strong>We discussed how to create a React App. First we need to install 
              Node JS from browser. After that we install VSCode. After that we install some packes like Live Server,
               React Redux snippet, Prettier.<br/><br/>To create the project use command <code>npx create-react-app my-app </code>
               in the terminal.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={myStyle}
            >
              Day #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Created Navbar component: </strong>
              We discussed how to add Bootstrap classes in our project, 
              Created components for our page, 
              Used Props - propTypes and defaultProps
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={myStyle}
            >
              Day #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>React Hooks: </strong> We discussed a React Hook called <code>useState</code>, we created functions and learned Event Handling.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
              style={myStyle}
            >
              Day #4
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Alert component: </strong> We created a new component called Alert. Created a object based variable in useState and used <code>setTimeout</code> function in our Application.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
              style={myStyle}
            >
              Day #5
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>React Routing: </strong> We installed a package called react-router-dom using command <code>npm install react-router-dom</code>, created another component called <strong>"About Us"</strong> and used Route to toggle between the Headers in Navbar.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}