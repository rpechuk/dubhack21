import logo from './logo.svg';
import './App.css';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import Navbar from './components/Navbar';
var directLine = new DirectLine({
   secret: '10o3qCCaNnM.wowdh1jFid6DGI0n-HIjnrW5hWfJiLivivCd6y5mOO8'
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
