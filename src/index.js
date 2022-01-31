import React from "react";
import ReactDom from "react-dom";
import { App } from "./components/App.jsx";
import './style/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
    <App />,
    document.querySelector('#root')
)