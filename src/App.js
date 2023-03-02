// import './App.css';
import React from "react";
import ScrollTop from "./components/scrollTop/ScrollTop";
import MainRouter from "./components/reactRouter/MainRouter";

function App() {

  return (
    <div className="App">
      <MainRouter />
      <ScrollTop />
    </div>
  );
}

export default App;
