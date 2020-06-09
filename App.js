import React from 'react';
import './App.css';
import './Buttons.css';
import Popup from './components/popup.js';
function App() {
  return (<div className="App">

    <div className="screenone">

      <p className="body-text">If modal is open you cannot scroll me.</p>

    </div>

    <div className="screentwo">
      <p className="body-text">Close the modal and you can see me</p>
    </div>
    {/*here is comment to check if branch is working properly*/}

        <Popup/>

  </div>);
}

export default App;
