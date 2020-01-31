import React from "react";
import { connect } from "react-redux";
import {
  addCount,
  minusCount,
  hitungLuas,
  hitungKeliling
} from "../actions/square.action";

function Square(props) {
  console.log(props);
  return (
    <div>
      <h2>Square Redux</h2>
      <h4>Sisi: {props.sisi}</h4>
      <button
        onClick={() => {
          props.addCount();
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          props.minusCount();
        }}
      >
        minus
      </button>
      <h4>Luas: {props.sisi}² = {props.luas}</h4>
      <button
        onClick={() => {
          props.hitungLuas();
        }}
      >
        Hitung Luas
      </button>
      <h4>Keliling: {props.sisi} x 4 = {props.keliling}</h4>
      <button
        onClick={() => {
          props.hitungKeliling();
        }}
      >
        Hitung Keliling
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sisi: state.square.sisi,
    luas: state.square.luas,
    keliling: state.square.keliling
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: () => dispatch(addCount()),
    minusCount: () => dispatch(minusCount()),
    hitungLuas: () => dispatch(hitungLuas()),
    hitungKeliling: () => dispatch(hitungKeliling())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
