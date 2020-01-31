import React from "react";
import { connect } from "react-redux";
import { addCount, minusCount, INCREMENT, DECREMENT } from "../actions/counter";

function Counter(props) {
  return (
    <div>
      <h1>Counter: {props.counter}</h1>
      <button onClick={() => props.dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => props.dispatch({ type: DECREMENT })}>-</button>
      <button
        onClick={() => {
          props.addCount();
        }}
      >
        + function
      </button>
      <button
        onClick={() => {
          props.minusCount();
        }}
      >
        - function
      </button>
    </div>
  );
}

const mapStateToProps = state => { //mapStateToProps untuk menarik data
  return {
    counter: state.counter.count
  };
};

const mapDispatchToProps = dispatch => { //mapsDispatchToProps untuk mengirim data
  return {
    addCount: () => dispatch(addCount()),
    minusCount: () => dispatch(minusCount()),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
