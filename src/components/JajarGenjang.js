import React, { useState } from "react";

export default function Math() {
  const [alas, setAlas] = useState(0);
  const [miring, setMiring] = useState(0);
  const [result, setResult] = useState({
    luas: 0,
    keliling: 0,
  });

  const handleSubmit = event => {
    event.preventDefault();
    const resultKeliling = 2 * (alas + miring);
    const resultLuas = // alas * tinggi
    setResult({ keliling: resultKeliling, luas: resultLuas });
  };

  const handleChange = event => {
    setAlas(event.target.value);
  };

  return (
    <div>
      <h1>jajarGenjang Formula</h1>
      <h2>Luas: 1/2 x alas x tinggi </h2>
      <h2>Keliling: </h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          value={alas}
          name="alasjajargenjang"
        />
        <input
          type="number"
          name="miringjajargenjang"
          onChange={handleChange}
          value={miring}
        />
        <button type="submit">Result</button>
      </form>
      <h1>Keliling Jajargenjang: {result.keliling}</h1>
      <h1>Luas Jajargenjang: {result.luas}</h1>
    </div>
  );
}
