import React, {useState} from 'react'

export default function Lingkaran() {
    const [lingkaran, setLingkaran] = useState(0);
    const [result, setResult] = useState({
        luas: 0,
        keliling: 0
    });

    const handleSubmit = event => {
        event.preventDefault();
        const resultKeliling = 3.14159 * lingkaran
        const resultLuas = 3.14159 * (lingkaran*lingkaran) / 4;
        setResult({keliling: resultKeliling, luas: resultLuas});
    };

    const handleChange = event => {
        setLingkaran(event.target.value);
    };

    return (
        <div>
            <h1>Lingkaran Formula</h1>
            <h2>Luas: π x {lingkaran}² / 4 </h2>
            <h2>Keliling: π x {lingkaran} </h2>
            <form onSubmit={handleSubmit}>
                <input type="number"
                onChange={handleChange}
                value={lingkaran}
                name="lingkaran" />
                <button type="submit">Result</button>
            </form>
            <h1>Luas Lingkaran: {result.luas}</h1>
            <h2>Keliling Lingkaran: {result.keliling} </h2>
        </div>
    )
}
