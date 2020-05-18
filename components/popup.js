import React from 'react';
import DisplayVendors from './displayVendors.js'


function Popup() {
  return (
  <div>
    <div className='modal' id='popup'>
      <div className='modal-content'>
        <h2 className='headline'>GDPR consent</h2>
        <DisplayVendors></DisplayVendors>
        <div className="buttons">
          <button id='accept'>Accept</button>
          <button id='reject'>Reject</button>
        </div>
      </div>
    </div>
  </div>)
}

export default Popup;
