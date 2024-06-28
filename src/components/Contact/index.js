import React from "react";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          border: "0.3px solid white",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <div>
          <h2 style={{ color: "white" }}>Contact With Me</h2>
        </div>
        <div>
          <input style={{}} placeholder="Email" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
