import React, { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MapView from "./components/MapView";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <MapView/>
    </Fragment>
  );
}

export default App;