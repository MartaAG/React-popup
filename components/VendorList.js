import React from 'react';

function VendorList(props) {
  let VendorsArray = props.vendorList;
  let listVendor = VendorsArray.map((v) =>
    <li className='vendorList'
        id={v.id}
        key={v.id}>
        {v.name}

        <a
          href={v.policyUrl}
          className='companyLink'> {v.policyUrl}</a>
        <label className='switch'>
          <input
          type='checkbox'
          className='switch-input'/>
      <span className='switch-handle'></span>
    </label>
  </li>);
  return (<div id="listOfVendors">
    <ul id="parent-list">
      {listVendor}
    </ul>
  </div>)
}

export default VendorList;
