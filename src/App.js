import React, { useState, useEffect, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { createGlobalStyle } from "styled-components";
import Dashboard from './components/Dashboard';
import RecentlyActivity from './components/RecentlyActivity';
import Announcement from './components/Announcement';
import UpcomingSchedule from './components/UpcomingSchedule';

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
const MyGridContainer = styled.div`
  height: 900px;
`

const MyFirstGridContainer = styled.div`
 display: inline-grid;
 grid-template-columns: 1fr;
 grid-template-rows: 440px 440px;
 width: 51.18790496760259%;
 row-gap: 20px;
`

const MySecondGridContainer = styled.div`
 position: absolute;
 display: inline-grid;
 grid-template-columns: 1fr;
 grid-template-rows: 440px 440px;
 width: 48.81209503239741%; /*678 / 13890*/
 row-gap: 20px;
`

const darkTheme = {
  bgColorPrimary: "#161E54",
  bgColorSecondary: "#303030",
  colorText: "#B2B2B2",
  borderPrimary: "1px #e0e0e000 solid",
  H1ColorPrimary: "#fafafa",
  H5ColorPrimary: "#fafafa",
  pColorPrimary: "#fff",
  asideBgColor: "#303030",
  asideBgTop: "#686868",
  bgSelect: "#686868"
}

const lightTheme = {
  bgColorPrimary: "#fff",
  bgColorSecondary: "#fafafa",
  colorText: "#efefef",
  borderPrimary: "1px #e0e0e0 solid",
  H1ColorPrimary: "#161E54",
  H5ColorPrimary: "#303030",
  pColorPrimary: "#686868",
  asideBgColor: "#161E54",
  asideBgTop: "#1B204A",
  bgSelect: "transparent"
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
        <MyGridContainer>
          <MyFirstGridContainer>
            <Dashboard />
            <Announcement />
          </MyFirstGridContainer>
          <MySecondGridContainer>
            <RecentlyActivity />
            <UpcomingSchedule />
          </MySecondGridContainer>
        </MyGridContainer>
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
