import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Footer from "./components/Footer";
import Preloader from "./components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './style.css';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1200)
  }, [])
  return (
    <>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
          </div>
      </Router>
    </>
  );
}

export default App;
