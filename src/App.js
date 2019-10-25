import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.sass";
import { fetchCrypto } from "./actions/CryptoData";
import HeroHeading from "./components/Hero";

function App(props) {
  useEffect(() => {
    props.fetchCrypto();
  }, [props]);

  return (
    <div>
      <HeroHeading />
    </div>
  );
}

export default App;
