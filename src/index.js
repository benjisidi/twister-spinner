import React, { setGlobal } from 'reactn';
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";


var mountNode = document.getElementById("app");
setGlobal({
    players: null,
})
ReactDOM.render(<App name="Jane" />, mountNode);