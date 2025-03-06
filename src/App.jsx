import React, { useState, useEffect, useContext } from "react";
import Loader from "./components/Loader";
import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/noMoreDisconnectedDots/Main";
import Edip from "./pages/bridgingTheGaps/Edip"
import {ThemeContext, ThemeProvider } from "../ThemeContext";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {setLight, setDark, theme } = useContext(ThemeContext);

  useEffect(() => {
    // Simulate asset loading with a minimum duration of 2 seconds
    const loadAssets = () => {
      const loadTime = new Promise((resolve) => {
        // Simulate asset loading time (e.g., images, fonts)
        window.onload = () => resolve();
      });

      const minimumDuration = new Promise(
        (resolve) => setTimeout(resolve, 0) // Minimum 2 seconds
      );

      Promise.all([loadTime, minimumDuration]).then(() => setIsLoading(false));
    };

    loadAssets();
  }, []);

  return (
    <ThemeProvider class='dark'>

    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route path='/' element={
          <StyledApp isLoading={[isLoading]}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="overflow-auto h-screen w-screen scroll-smooth dark:bg-black bg-[#fafafa]">
              <LandingPage />
            </div>
          )}
        </StyledApp>
        } />
        <Route path='/project/infosys' element={<Main/>}/>
        <Route path='/project/edip' element={<Edip/>}/>
      </Routes>
      
    </BrowserRouter>
    </ThemeProvider>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  background: ${({ isLoading }) =>
    isLoading
      ? "#000000" // Background during loading
    : theme == 'dark' ? "linear-gradient(to right, #262b27 25%,#000000 80%)"
    : "white"}; // Background on landing page
  display: ${({ isLoading }) =>
    isLoading
      ? "flex" // Background during loading
      : "block"};
  justify-content: center;
  align-items: center;
  transition: background 1s ease; // Smooth transition between backgrounds
`;

export default App;

// #363B37
// #3C493D
