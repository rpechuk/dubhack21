import logo from './logo.svg';
import './App.css';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import Navbar from './components/Navbar';
var directLine = new DirectLine({
   secret: 'I4yzuxbLYhs.8KqueIfQntg54OI9sv2lB2R6iKteiI_kolUdwDEw4P0'
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
