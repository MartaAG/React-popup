import React from 'react';
import Vendor from './Vendor.js'
import Cookies from 'js-cookie'
import Buttons from './Buttons'


class VendorList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      vendorStatus: {}
    };

    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }

  handleCheckChange(id, isChecked) {
    //lifting state up
    //saving to state id of vendor and the value of checkbox
      let changedStatus = {...this.state.vendorStatus}
      changedStatus[id] = isChecked
      this.setState({ vendorStatus: changedStatus });
  }
//iterate over vendorStatus
//save it to cookies
  handleButtonClick(){
    let acceptedVendors = [];
    for(const id in this.state.vendorStatus) {
      if (this.state.vendorStatus[id]) {
        acceptedVendors.push(id)
      }
      this.setCookie(acceptedVendors)
    }
  }
  setCookie(id) {
    Cookies.set("acceptedVendors", id, { expires: 1, path: '/' });
  }

  render() {
    return (
      <div id="listOfVendors">
    <ul id="parent-list">
      {this.props.vendorList.map((v) => { return (
        <Vendor onCheckboxChange={this.handleCheckChange}
          id={v.id}
          name={v.name}
          policyUrl={v.policyUrl}
          key={v.id.toString()}
          />)
      }
      )}
    </ul>

    <Buttons action={this.handleButtonClick}/>

  </div>

)
  }
}

export default VendorList;
