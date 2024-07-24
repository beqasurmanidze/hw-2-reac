import React, { useState } from "react";
import Header from "./Header/Header";
import MainCont from "./MainContainer/MainCont";
import Footer from "./Footer/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <Header toggleMode={toggleMode} isDarkMode={isDarkMode} />
      <MainCont toggleMode={toggleMode} isDarkMode={isDarkMode} />
      <Footer toggleMode={toggleMode} isDarkMode={isDarkMode} />
    </>
  );
};

export default App;
