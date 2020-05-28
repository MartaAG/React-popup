import React from 'react';


class Vendor extends React.Component {
  constructor(props) {
    super();
    this.state = {}
  }

  render() {
    return (  <li className='vendorList'
          id={this.props.id}
          key={this.props.id}>
          {this.props.name}

          <a href={this.props.policyUrl}
            className='companyLink'>
            {this.props.policyUrl}</a>
          <label className='switch'>
            <input type='checkbox'
                className='switch-input'/>
        <span className='switch-handle'></span>
        </label>
    </li>)
  }

}

export default Vendor;
