import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
    </React.Fragment>
  );
}

export default App;
