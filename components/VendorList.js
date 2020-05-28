import React from 'react';
import Vendor from './Vendor.js'

function VendorList(props) {
  let VendorsArray = props.vendorList;
  let listVendor = VendorsArray.map((v) => { return (
    <Vendor id={v.id} name={v.name} policyUrl={v.policyUrl}/>)
  }
    );
  return (<div id="listOfVendors">
    <ul id="parent-list">
      {listVendor}
    </ul>
  </div>)
}

export default VendorList;
