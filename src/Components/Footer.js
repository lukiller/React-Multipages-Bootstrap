import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <span className="text-muted">Este es un sticky footer &copy;2020.</span>
      </div>
    </footer>
  );
}
