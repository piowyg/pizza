import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import {useEffect } from "react";
import {useDispatch } from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from '../store'

const App = () => {

  const dispatch = useDispatch();

  const {loadMenu} = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
      loadMenu("http://localhost:4000/api/pizza");
  }, [loadMenu]);


  return (
    <>
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
    </>
  )
}

export default App;
