import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import { useState, useEffect } from "react";

const App = () => {

  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/pizza")
      .then((response) => response.json())
      .then((data) => {
        console.log("returned data", data);
        return data;
      })
      .then((data) => setPizzaList(data));
  }, []);

  return (
    <React.Fragment>
      <Router>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <main>
            <section className="page">
              {<Page />}
            </section>
          </main>
        </div>
      </Router>
      </React.Fragment>
  )
}

export default App;
