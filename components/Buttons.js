import React from 'react';

function Popup(props) {

  return (
    <div className="buttons">
      <button id='accept' onClick={props.action}>Accept</button>
      <button id='reject'>Reject</button>
    </div>)
}

export default Popup;
