import React from "react";
import ReactDOM from "react-dom";
import "./styles/all.scss";
import App from "./App";
import { LOCALFORAGE_INITIATE } from "./initiates/initiate";
import * as serviceWorker from "./serviceWorker";

// eslint-disable-next-line no-unused-vars
const $ = window.$;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
//Any packages that required configure and/or set something required initiate, please write the initiate code in here
LOCALFORAGE_INITIATE();
