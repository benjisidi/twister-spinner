
import React from "react";
import Game from "./game"
import GameConfig from "./game-config"

import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
class App extends React.Component {
  render() {
      return (
          <Router>
              <Routes >
            <Route path="/play" element={<Game />}/>
            <Route path="/" element={<GameConfig/>}/>
          </Routes >
            </Router>
    );
  }
}

export default App;
