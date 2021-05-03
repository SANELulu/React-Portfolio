import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoCard from "./components/InfoCard";
import Wrapper from "./components/Wrapper";
import Item from "./pages/Item";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";
import Item4 from "./pages/Item4";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Wrapper>
          <Route exact path="/" component={Item} />
          <Route exact path="/Item2" component={Item2} />
          <Route exact path="/Item3" component={Item3} />
          <Route exact path="/Item4" component={Item4} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
