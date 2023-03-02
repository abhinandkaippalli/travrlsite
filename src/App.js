// import './App.css';
import React from "react";
import ScrollTop from "./components/scrollTop/ScrollTop";
import MainRouter from "./components/reactRouter/MainRouter";
import Header from "./components/header/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <MainRouter />
      <ScrollTop />
    </div>
  );
}

export default App;
