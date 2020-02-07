import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // yarn add redux-thunk
import logger from "redux-logger"; // yarn add redux-logger
import "bootstrap/dist/css/bootstrap.min.css";
import counter from "./reducer/counter";
import square from "./reducer/square.reducer";
import segitiga from "./reducer/segitiga.reducer";
import github from "./reducer/github";
import mock from './reducer/mock';
import fetchOwnApi from './reducer/fetchOwnApi';

export default createStore(
  combineReducers({ counter, square, github, segitiga, mock, fetchOwnApi }),
  applyMiddleware(thunk, logger)
);
