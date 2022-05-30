import React from "react";
import "./search.css";
export function Search({ placeholder, handleChange }) {
  return (
    <input
      type="text"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
