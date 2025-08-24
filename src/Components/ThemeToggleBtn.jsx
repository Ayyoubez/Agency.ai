import React, { useEffect } from "react";
import assets from "../assets/assets";

function ThemeToggleBtn({ theme, setTheme }) {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => {
              setTheme("light");
            }}
            src={assets.sun_icon}
            alt=""
            className="rounded-full size-8.5 p-1.5 border border-gray-500"
          />
        ) : (
          <img
            onClick={() => {
              setTheme("dark");
            }}
            src={assets.moon_icon}
            alt=""
            className="rounded-full size-8.5 p-1.5 border border-gray-500"
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggleBtn;
