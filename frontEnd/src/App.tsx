import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import ChatMain from "./Components/Chat/ChatMain";
import Home from "./Components/home/Home";
import darkbtn from "/dark-30.png";
import lightbtn from "/light-30.png";
import Cookies from "js-cookie";

const App = () => {
  const savedTheme = Cookies.get("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    // Apply the selected theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the selected theme to cookies
    Cookies.set("theme", theme, { expires: 365 }); // Set the expiration date as needed
  }, [theme]);

  const handleThemeSwitch = () => {
    // Switch the theme and update the state
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-primary dark:bg-secondary text-black dark:text-white">
      <button
        className="fixed top-5 right-5 z-10 rounded-3xl"
        onClick={handleThemeSwitch}
      >
        {theme == "light" ? (
          <img src={lightbtn} alt="darkbtn" className="listItemsImg" />
        ) : (
          <img src={darkbtn} alt="darkbtn" className="listItemsImg" />
        )}
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
