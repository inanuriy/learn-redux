import React from "react";
import { connect } from "react-redux";
import {
  addCountSegitiga,
  minusCountSegitiga,
  hitungLuasSegitiga,
  hitungKelilingSegitiga
} from "../actions/segitiga.action";

function Segitiga(props) {
  console.log(props);
  return (
    <div>
      <h1>Segitiga Redux</h1>
      <h2>Sisi: {props.sisiSegitiga}</h2>
      <button
        onClick={() => {
          props.addCountSegitiga();
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          props.minusCountSegitiga();
        }}
      >
        minus
      </button>
      <h2>Luas: ({props.sisiSegitiga}² / 4) x √3 =  {props.luasSegitiga}</h2>
      <button
        onClick={() => {
          props.hitungLuasSegitiga();
        }}
      >
        Hitung Luas
      </button>
      <h2>Keliling: {props.sisiSegitiga} x 3 = {props.kelilingSegitiga}</h2>
      <button
        onClick={() => {
          props.hitungKelilingSegitiga();
        }}
      >
        Hitung Keliling
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sisiSegitiga: state.segitiga.sisiSegitiga,
    luasSegitiga: state.segitiga.luasSegitiga,
    kelilingSegitiga: state.segitiga.kelilingSegitiga
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCountSegitiga: () => dispatch(addCountSegitiga()),
    minusCountSegitiga: () => dispatch(minusCountSegitiga()),
    hitungLuasSegitiga: () => dispatch(hitungLuasSegitiga()),
    hitungKelilingSegitiga: () => dispatch(hitungKelilingSegitiga())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Segitiga);
