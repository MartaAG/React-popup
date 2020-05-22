import React from 'react';

function Popup(props) {

  return (
    <div className="buttons">
      <button id='accept'>Accept</button>
      <button id='reject' onClick={props.action}>Reject</button>
    </div>)
}

export default Popup;
