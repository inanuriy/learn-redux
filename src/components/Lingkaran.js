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
            <h2>Lingkaran Formula</h2>
            <h4>Luas: π x {lingkaran}² / 4 </h4>
            <h4>Keliling: π x {lingkaran} </h4>
            <form onSubmit={handleSubmit}>
                <input type="number"
                onChange={handleChange}
                value={lingkaran}
                name="lingkaran" />
                <button type="submit">Result</button>
            </form>
            <h4>Luas Lingkaran: {result.luas}</h4>
            <h4>Keliling Lingkaran: {result.keliling} </h4>
        </div>
    )
}
