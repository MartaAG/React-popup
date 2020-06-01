import React from 'react';
import Vendor from './Vendor.js'

class VendorList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      vendorStatus: {}
    };

    this.handleCheckChange = this.handleCheckChange.bind(this);

  }

  handleCheckChange(id, isChecked) {
      let changedStatus = {...this.state.vendorStatus}
      changedStatus[id] = isChecked
      this.setState({ vendorStatus: changedStatus });
      console.log(changedStatus)
  }

  render() {
    return (
      <div id="listOfVendors">
    <ul id="parent-list">
      {this.props.vendorList.map((v) => { return (
        <Vendor onCheckboxChange={this.handleCheckChange} id={v.id} name={v.name} policyUrl={v.policyUrl}/>)
      }
      )}
    </ul>
  </div>)
  }
}

export default VendorList;
