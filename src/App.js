import React from 'react';
import Counter from './components/Counter';
import Square from './components/Square';
import Segitiga from './components/Segitiga';
import Lingkaran from './components/Lingkaran';
import JajarGenjang from './components/JajarGenjang';
import SquareRedux from './components/SquareRedux';
import SegitigaRedux from './components/SegitigaRedux'


function App() {
  return (
    <div>
      <Counter /><hr/>
      <Square /><hr/>
      <Segitiga /><hr/>
      <Lingkaran /><hr/>
      <SquareRedux /><hr/>
      <SegitigaRedux />
    </div>
  );
}

export default App;
