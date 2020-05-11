import React, { Component } from "react";
import "./App.css";

const App = () => {
  const nav = (
    <div className="app-main">
      <div className="nav-bar">
        <div>
          <img src="/images/ironhack-logo.svg" />
        </div>
        <div>
          <img src="/images/menu-top.svg" />
        </div>
      </div>
      <div className="title">
        <div className="main-title">
          <h1>Say Hello to ReactJS!</h1>
        </div>
        <div className="body-text">
          <p>
            You will learn a Frontend framework from scratch and become an
            amazing developer!
          </p>
        </div>
        <div>
          <button>Awesome!</button>
        </div>
      </div>
    </div>
  );

  const body = (
    <div className="main-body">
      <div className="icon">
        <div className="icon-img">
          <img src="/images/icon1.png" />
        </div>
        <div className="icon-title">
          <h2>Declarative</h2>
        </div>
        <div className="icon-text">
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
      <div className="icon">
        <div className="icon-img">
          <img src="/images/icon2.png" />
        </div>
        <div className="icon-title">
          <h2>Components</h2>
        </div>
        <div className="icon-text">
          <p>Build encapsulated components that manage their state.</p>
        </div>
      </div>
      <div className="icon">
        <div className="icon-img">
          <img src="/images/icon3.png" />
        </div>
        <div className="icon-title">
          <h2>Single-Way</h2>
        </div>
        <div className="icon-text">
          <p>A set of immutable values are passed to the components.</p>
        </div>
      </div>
      <div className="icon">
        <div className="icon-img">
          <img src="/images/icon4.png" />
        </div>
        <div className="icon-title">
          <h2>JSX</h2>
        </div>
        <div className="icon-text">
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="App">
      {nav} {body}
    </div>
  );
};

export default App;
