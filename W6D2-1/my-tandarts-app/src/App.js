import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
// import KalenderOverzicht from "./components/Overzich";
import NavBar from "./components/NavBar";
// import DagOverzicht from "./components/DagOverzich";
import Overzicht from "./components/Overzich";

export default function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Overzicht />
    </div>
    // <Router>

    //   <Switch>
    //     <Route path="/" exact component={KalenderOverzicht} />
    //     <Route path="/about" component={DagOverzicht} />
    //     <Route path="/Maandoverzicht" component={KalenderOverzicht} />
    //   </Switch>
    // </Router>
  );
}
