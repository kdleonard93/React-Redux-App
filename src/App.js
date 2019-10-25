import React, { useEffect } from "react";
import { connect } from "react-redux";
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
    <Provider>
      <div>
        <HeroHeading />
      </div>
    </Provider>
  );
}

function mapStateToProps(state) {
  return {
    darkMode: state.theme.darkMode,
    isDogLoading: state.dog.isLoading,
    dogImage: state.dog.dog,
    dogError: state.dog.error
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchCrypto
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
