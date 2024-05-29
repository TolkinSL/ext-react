import { render } from 'react-dom';
import { Counter } from './components/Counter';

render(
  <div>
    <p>Hello React 17</p>
    <Counter />
  </div>,
  document.getElementById('root')
);
