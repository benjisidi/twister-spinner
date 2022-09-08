
import React from "react";
import Game from "./game"
import GameConfig from "./game-config"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
class App extends React.Component {
  render() {
      return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
          <Router>
              <Routes >
            <Route path="/play" element={<Game />}/>
            <Route path="/" element={<GameConfig/>}/>
          </Routes >
              </Router>
                  </ThemeProvider>

    );
  }
}

export default App;
