import React, { useState, useEffect, useContext } from "react";
import Loader from "./components/Loader";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/noMoreDisconnectedDots/Main";
import Edip from "./pages/bridgingTheGaps/Edip";
import { ThemeContext, ThemeProvider } from "../ThemeContext";
import About from "./pages/About/About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setLight, setDark, theme } = useContext(ThemeContext);

  useEffect(() => {
    const loadAssets = () => {
      const loadTime = new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve);
        }
      });

      // Set a minimum duration of 2 seconds
      const minimumDuration = new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      Promise.all([loadTime, minimumDuration]).then(() => setIsLoading(false));
    };

    loadAssets();
  }, []);

  return (
    <ThemeProvider className="dark">
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <StyledApp isLoading={isLoading} theme={theme}>
                {isLoading ? (
                  <Loader />
                ) : (
                  <div className="overflow-auto h-screen w-screen scroll-smooth dark:bg-black bg-[#fafafa]">
                    <LandingPage />
                  </div>
                )}
              </StyledApp>
            }
          />
          <Route path="/about" element={<About/>} />
          <Route path="/project/infosys" element={<Main />} />
          <Route path="/project/edip" element={<Edip />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  background: ${({ isLoading, theme }) =>
    isLoading
      ? "#000000"
      : theme === "dark"
      ? "linear-gradient(to right, #262b27 25%, #000000 80%)"
      : "white"};
  display: ${({ isLoading }) => (isLoading ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  transition: background 1s ease;
`;

export default App;
