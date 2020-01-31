import { createStore } from 'redux';
import counter from './reducer/counter';

// export default createStore(counter);

import squareReducer from "./reducer/square.reducer"

export default createStore(squareReducer);