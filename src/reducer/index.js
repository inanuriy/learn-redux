import {combineReducers} from "redux";
import counter from "./counter";
import square from "./square.reducer";
import segitiga from "./segitiga.reducer"

export default combineReducers({
    counter: counter,
    square: square,
    segitiga: segitiga
});