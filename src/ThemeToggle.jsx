import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "10px",
        padding: "8px 12px",
        borderRadius: "50%",
        fontSize: "18px",
        cursor: "pointer",
        border: "none",
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
        transition: "all 0.3s ease",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
