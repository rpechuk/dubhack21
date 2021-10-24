import logo from './logo.svg';
import './App.css';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import Navbar from './components/Navbar';
var directLine = new DirectLine({
   secret: 'LW9ArQ_qEqQ.zlRv9kcpWU34CFCzawP7VFcyLF810GlOT1kIwMK2AqY'
 });

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReactWebChat directLine={ directLine } username='test' />
    </div>
  );
}

export default App;
