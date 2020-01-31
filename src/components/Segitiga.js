import React, {useState} from "react";

export default function Math() {
  const [segitiga, setSegitiga] = useState(0);
  const [result, setResult] = useState({
    luas: 0,
    keliling: 0
    // tinggi: 0
  });

  const handleSubmit = event => {
    event.preventDefault();
    const resultKeliling = 3 * segitiga;
    const resultLuas = ((segitiga*segitiga) / 4) * 1.732 ;
    setResult({ keliling: resultKeliling, luas: resultLuas});
  };

  const handleChange = event => {
    setSegitiga(event.target.value);
  };

  return (
    <div>
      <h1>Segitiga Formula</h1>
      <h2>Luas: ({segitiga}² / 4) x √3 </h2>
      <h2>Keliling: 3 x {segitiga} </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          value={segitiga}
          name="segitiga"
        />
        <button type="submit">Result</button>
      </form>
      <h1>Keliling Segitiga: {result.keliling}</h1>
      <h1>Luas Segitiga: {result.luas}</h1>
    </div>
  );
}
