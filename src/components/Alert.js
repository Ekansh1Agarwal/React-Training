import React from "react";

export default function Alert(props) {

  const {alert} = props;
  return (
    <>
      { alert && (
        <div
          style={{
            height: "50px",
            width: "300px",
            position: "absolute",
            top: "60px",
            right: "0",
          }}
          // className={`alert alert-warning`}
          className={`alert alert-${alert.type}`}
          role="alert"
        >
          <strong>{alert.msg}</strong>
          {/* {props.alert.msg} */}
        </div>
      )}
    </>
  );
}
