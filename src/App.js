import React, { useState, useEffect, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { createGlobalStyle } from "styled-components";
import Dashboard from './components/Dashboard';
import RecentlyActivity from './components/RecentlyActivity';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color:  ${({ theme }) => theme.bgColorPrimary};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent ;
  }

  a{
    text-decoration: none;
  }
`

const MainContainer = styled.div`
  width: 96.45833333333333%;
  position: absolute;
  right: 0;
`

const MyH1 = styled.h1`
color: ${({ theme }) => theme.H1ColorPrimary};
font-weight: lighter;
font-size: 2.625rem;
`

const darkTheme = {
  bgColorPrimary: "#161E54",
  bgColorSecondary: "#303030",
  colorText: "#B2B2B2",
  borderPrimary: "1px #e0e0e000 solid",
  H1ColorPrimary: "#fafafa",
  pColorPrimary: "#fff",
  asideBgColor: "#303030",
  asideBgTop: "#686868"
}

const lightTheme = {
  bgColorPrimary: "#fff",
  bgColorSecondary: "#fafafa",
  borderPrimary: "1px #e0e0e0 solid",
  H1ColorPrimary: "#161E54",
  pColorPrimary: "#686868",
  asideBgColor: "#161E54",
  asideBgTop: "#1B204A"
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem("theme") === "light") {
        setTheme("light")
      } else if (localStorage.getItem("theme") === "dark") {
        setTheme("dark")
      }
    }
  }, [])


  return (
    <ThemeProvider theme={themes[theme]}>
      <MainContainer>
        <Header theme={theme} setTheme={setTheme} />
        <MyH1>Dashboard</MyH1>
        <Dashboard />
        <RecentlyActivity />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
