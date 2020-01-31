import { createStore } from 'redux';
import counter from './reducer/counter';

export default createStore(counter);