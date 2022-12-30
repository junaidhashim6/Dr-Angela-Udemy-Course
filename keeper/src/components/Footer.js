import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copy Right @ {year}</p>
    </footer>
  );
}
