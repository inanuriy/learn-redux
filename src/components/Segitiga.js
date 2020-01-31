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
    const resultLuas = ((segitiga*segitiga) / 4) * 1.76 ;
    setResult({ keliling: resultKeliling, luas: resultLuas});
  };

  const handleChange = event => {
    setSegitiga(event.target.value);
  };

  return (
    <div>
      <h2>Segitiga Formula</h2>
      <h4>Luas: ({segitiga}² / 4) x √3 </h4>
      <h4>Keliling: 3 x {segitiga} </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          value={segitiga}
          name="segitiga"
        />
        <button type="submit">Result</button>
      </form>
      <h4>Keliling Segitiga: {result.keliling}</h4>
      <h4>Luas Segitiga: {result.luas}</h4>
    </div>
  );
}
