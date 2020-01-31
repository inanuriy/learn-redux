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
      <h2>Segitiga Redux</h2>
      <h4>Sisi: {props.sisiSegitiga}</h4>
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
      <h4>Luas: ({props.sisiSegitiga}² / 4) x √3 =  {props.luasSegitiga}</h4>
      <button
        onClick={() => {
          props.hitungLuasSegitiga();
        }}
      >
        Hitung Luas
      </button>
      <h4>Keliling: {props.sisiSegitiga} x 3 = {props.kelilingSegitiga}</h4>
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
