"use client"; // Ensures it runs on the client-side

import { useState, useEffect } from "react";

const ThemeProvider = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Get stored theme preference from localStorage
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update localStorage and apply to document
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeProvider;
