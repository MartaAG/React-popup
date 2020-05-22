import React from 'react';
import VendorList from './VendorList.js'
import Purposes from './Purposes.js'

class FetchInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      description: [],
      list: []
    };
  }

  async componentDidMount() {
    const URL = 'https://gist.githubusercontent.com/MartaAG/7b7573c8e0fc063180d2d7451b4353fa/raw/21bc65a5892ab4762aa1faa7bd15d7e94f52a07b/vendors.json';
    const response = await fetch(URL);
    const data = await response.json();

    let vendors = data.vendors.map((vendor) => {
      return ({id: vendor.id, name: vendor.name, policyUrl: vendor.policyUrl})
    })

    let text = data.purposes.map((purpose => {
      return({name:purpose.name, description:purpose.description, id:purpose.id, index:purpose.index})
    }))
    this.setState({list: vendors, description:text})
  }

  render() {
    return (<div>
        <Purposes purposesDescription={this.state.description}></Purposes>
        <VendorList vendorList={this.state.list}></VendorList>
    </div>)
  }
}

export default FetchInformation
