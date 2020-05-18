import React from 'react';
import './App.css';
import './Buttons.css';
import Popup from './components/popup.js';

function App() {
  return (<div className="App">
    <body id="bd">

      <div class="screenone">

        <p class="body-text">If modal is open you cannot scroll me.</p>

      </div>

      <div class="screentwo">
        <p class="body-text">Close the modal and you can see me</p>
      </div>
      <Popup></Popup>
    </body>
  </div>);
}

export default App;
