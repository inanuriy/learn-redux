import React, { useState } from "react";

export default function Square() {
  const [square, setSquare] = useState(0);
  const [result, setResult] = useState({
      keliling: 0,
      luas: 0
  });
  const handleSubmit = event => {
    event.preventDefault();
    const resultKeliling = 4 * square;
    const resultLuas = square * square;
    setResult({keliling: resultKeliling, luas: resultLuas});
  };
  const handleChange = event => {
    setSquare(event.target.value);
  };

  return (
    <div>
      <h2>Square Formula</h2>
      <h4>Keliling: 4 x {square}</h4>
      <h4>Luas: {square} x {square} </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          value={square}
          name="square"
        />
        <button type="submit">Result</button>
      </form>
      <h4>Keliling persegi: {result.keliling}</h4>
      <h4>Luas persegi: {result.luas}</h4>
    </div>
  );
}
