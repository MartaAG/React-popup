import React from 'react';

function Vendor(props) {

  return (
    <li className='vendorList'
        id={props.id}
        key={props.id}>
        {props.name}

        <a href={props.policyUrl}
          className='companyLink'>
          {props.policyUrl}</a>
        <label className='switch'>
          <input type='checkbox'
              className='switch-input'/>
      <span className='switch-handle'></span>
      </label>
  </li>)
}

export default Vendor;
