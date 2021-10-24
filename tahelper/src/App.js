import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import Navbar from './components/Navbar';

function App() {
  var directLine = new DirectLine({
     secret: '8e_eWeA1pbU.AWfQ_i8ovpyxFC88uLv6Nx4o9_biIsdz98VkwOcAMkQ'
  });

  return (
    <div className="App">
      <Navbar />
      <ReactWebChat directLine={ directLine } styleOptions={{
        bubbleBackground: '#ffffff',
        backgroundColor: '#242526',
        bubbleBorderRadius: 20,
        bubbleBorderColor: '#e67e00',
        bubbleBackground: '#e67e00',
        bubbleFromUserBackground: '#e67e00',
        bubbleFromUserBorderColor: '#e67e00',
        bubbleNubSize: 10,
        bubbleNubOffset: 'bottom',
        bubbleTextColor: 'white',
        sendBoxBackground: '#3a3b3c',
        sendBoxBorderTop: 'solid 1px #3a3b3c',
        sendBoxTextColor: 'white',
        rootHeight: (window.innerHeight * 0.91) + 'px',
        rootWidth: '100%'
      }} />
    </div>
  );
}

export default App;
