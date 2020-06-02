import React from 'react';
import Vendor from './Vendor.js'
import Cookies from 'js-cookie'

class VendorList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      vendorStatus: {}
    };

    this.handleCheckChange = this.handleCheckChange.bind(this);

  }

  handleCheckChange(id, isChecked) {
    //lifting state up
    //saving to state id of vendor and the value of checkbox
      let changedStatus = {...this.state.vendorStatus}
      changedStatus[id] = isChecked
      this.setState({ vendorStatus: changedStatus });

      this.setCookie(id, isChecked)
      console.log(changedStatus)
  }

  setCookie(id, value) {
    Cookies.set(id, value, { expires: 1, path: '/' });
  }

  render() {
    return (
      <div id="listOfVendors">
    <ul id="parent-list">
      {this.props.vendorList.map((v) => { return (
        <Vendor onCheckboxChange={this.handleCheckChange}
          id={v.id}
          name={v.name}
          policyUrl={v.policyUrl}/>)
      }
      )}
    </ul>
  </div>)
  }
}

export default VendorList;
